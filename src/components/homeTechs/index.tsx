import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { RiReactjsLine } from "react-icons/ri";
import { SiCsharp, SiDotnet, SiExpo, SiMicrosoftsqlserver } from "react-icons/si";

export default function HomeTechs() {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={250}>
        <TooltipTrigger>
          <div
            className={
              "text-lg flex gap-4 p-4 [&>*]: rounded-md _border-loop after:rounded-md"
            }
          >
            <span onClick={() => window.open("https://react.dev")}>React</span>
            <span onClick={() => window.open("https://expo.dev/")}>Expo</span>
            <span
              onClick={() =>
                window.open("https://learn.microsoft.com/pt-br/dotnet/csharp/")
              }
            >
              C#
            </span>
            <span
              onClick={() => window.open("https://dotnet.microsoft.com/pt-br/")}
            >
              Asp.Net
            </span>
            <span
              onClick={() =>
                window.open(
                  "https://www.microsoft.com/pt-br/sql-server/sql-server-2022"
                )
              }
            >
              SQL Server
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent className="flex gap-4 p-4 mb-2 [&>*]:">
          <RiReactjsLine
            onClick={() => window.open("https://react.dev")}
            size={32}
          />
          <SiExpo onClick={() => window.open("https://expo.dev/")} size={32} />
          <SiCsharp
            onClick={() =>
              window.open("https://learn.microsoft.com/pt-br/dotnet/csharp/")
            }
            size={32}
          />
          <SiDotnet
            onClick={() => window.open("https://dotnet.microsoft.com/pt-br/")}
            size={32}
          />
          <SiMicrosoftsqlserver
            onClick={() =>
              window.open(
                "https://www.microsoft.com/pt-br/sql-server/sql-server-2022"
              )
            }
            size={32}
          />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
