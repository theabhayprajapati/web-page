"use client"; // Mark this component as a client component

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const PATHS: Record<string, { paths: string[]; url: string }> = {
  MEET: {
    paths: ["meet", "m", "meeting", "call", "video", "video-call"],
    url: "https://meet.google.com/oeh-swqb-imu",
  },
  CHAT: {
    paths: ["chat", "message", "dm", "c"],
    url: "https://x.com/abhayprajapati_",
  },
  GITHUB: {
    paths: ["github", "git", "code", "source"],
    url: "https://github.com/theabhayprajapati",
  },
  RESUME: {
    paths: ["resume", "cv", "portfolio"],
    url: "/resume.pdf",
  },
};

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [frame, setFrame] = useState("");
  useEffect(() => {
    let A = 1,
      B = 1;
    const z = new Array(1760).fill(0);
    const b = new Array(1760).fill(" ");

    const asciiframe = () => {
      A += 0.07;
      B += 0.03;
      const cA = Math.cos(A),
        sA = Math.sin(A),
        cB = Math.cos(B),
        sB = Math.sin(B);

      for (let k = 0; k < 1760; k++) {
        b[k] = k % 80 === 79 ? "\n" : " ";
        z[k] = 0;
      }

      for (let j = 0; j < 6.28; j += 0.07) {
        const ct = Math.cos(j),
          st = Math.sin(j);

        for (let i = 0; i < 6.28; i += 0.02) {
          const sp = Math.sin(i),
            cp = Math.cos(i),
            h = ct + 2, // R1 + R2*cos(theta)
            D = 1 / (sp * h * sA + st * cA + 5), // this is 1/z
            t = sp * h * cA - st * sA; // clever factoring of some of the terms in x' and y'

          const x = Math.floor(40 + 30 * D * (cp * h * cB - t * sB)),
            y = Math.floor(12 + 15 * D * (cp * h * sB + t * cB)),
            o = x + 80 * y,
            N = Math.floor(
              8 *
                ((st * sA - sp * ct * cA) * cB -
                  sp * ct * sA -
                  st * cA -
                  cp * ct * sB)
            );

          if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
            z[o] = D;
            b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
          }
        }
      }

      setFrame(b.join(""));
    };

    const interval = setInterval(asciiframe, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let redirectPath = "";
    for (const key in PATHS) {
      const pathData = PATHS[key];
      console.log(`Finding ${pathname} in ${pathData.paths.map((p) => `/${p}`).join(", ")}`);
      const path = pathname?.split("/")[1];
      if (pathData.paths.includes(path)) {
        console.log('Matched', pathData.url);
        redirectPath = pathData.url;
        break;
      }
    }
    setTimeout(() => {
      // router.push(redirectPath);
    }, 250);
  }, []);
  return (
    <div className="h-screen flex items-center justify-center">
      <pre
        style={{
          fontFamily: "monospace",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          color: "white",
        }}
      >
        {frame}
      </pre>
    </div>
  );
};

export default Page;
