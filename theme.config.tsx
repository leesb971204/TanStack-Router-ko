import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import AppOnly from "@/components/apponly";
import PagesOnly from "@/components/pagesonly";
import Cross from "@/components/cross";
import Check from "@/components/check";
import Image from "@/components/externalImage";

const config: DocsThemeConfig = {
  logo: (
    <span className="font-extrabold text-2xl">
      TanStack <span className="text-[#EF4444] font-extrabold">Router v1</span>{" "}
      <small className="text-[#AAAAAA] text-sm font-medium">
        (비공식 한글 문서)
      </small>
    </span>
  ),
  project: {
    link: "https://github.com/leesb971204/TanStack-Router-ko",
  },
  docsRepositoryBase: "https://github.com/leesb971204/TanStack-Router-ko",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – TanStack Router 한글 문서",
      };
    }
  },
  components: {
    Check,
    Cross,
    AppOnly,
    PagesOnly,
    Image,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  darkMode: true,
  footer: {
    text: "TanStack Router v1 한글/한국어 문서 번역 (비공식) | Using Nextra Docs Template",
  },
};

export default config;
