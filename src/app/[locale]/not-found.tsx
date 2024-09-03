import Container from "@/components/container";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFoundPage")
  return (
    <Container className="items-center justify-center">
      <h1 className="text-2xl">{t("message")}</h1>
    </Container>
  );
}
