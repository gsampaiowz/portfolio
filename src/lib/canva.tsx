"use server";

import puppeteer from "puppeteer";
import { JSDOM } from "jsdom";

export async function generateCanvasDataURL(url: string): Promise<string> {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  // Ajusta as dimensões da tela para 1920x1080
  await page.setViewport({ width: 1360, height: 768 });

  // Obtem as dimensões da página antes de fazer a screenshot
  const dimensions = await page.evaluate(() => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  }));

  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  // Faz a screenshot
  const screenshotBuffer = await page.screenshot({
    encoding: "binary",
    clip: {
      x: 0,
      y: 0,
      width: Math.max(dimensions.width, 1360),
      height: Math.max(dimensions.height, 768),
    },
  });

  // Retorna diretamente o buffer da screenshot
  return `data:image/png;base64,${Buffer.from(screenshotBuffer).toString("base64")}`;
}
