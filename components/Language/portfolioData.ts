// Types
interface Stat {
    value: string
    label: string
  }
  
  interface ProjectItem {
    title: string
    description: string
    tags: string[]
  }
  
  interface ExperienceItem {
    position: string
    company: string
    period: string
    location: string
    achievements: string[]
  }
  
  interface LanguageData {
    nav: {
      about: string
      projects: string
      skills: string
      experience: string
      contact: string
    }
    hero: {
      name: string
      title: string
      description: string
      stats: Stat[]
    }
    skills: {
      title: string
      frontend: string[]
      backend: string[]
      tools: string[]
      categories: {
        frontend: string
        backend: string
        tools: string
      }
    }
    projects: {
      title: string
      description: string
      items: ProjectItem[]
    }
    experience: {
      title: string
      items: ExperienceItem[]
    }
    contact: {
      title: string
      description: string
      email: string
      linkedin: string
      button: string
    }
    footer: {
      copyright: string
    }
  }
  
  export interface PortfolioData {
    en: LanguageData
    ja: LanguageData
  }
  
  // Force static generation
  export const dynamic = 'force-static'
  
  // Static data
  export const getPortfolioData = (): PortfolioData => {
    return {
      en: {
        nav: {
          about: "About",
          projects: "Projects",
          skills: "Skills",
          experience: "Experience",
          contact: "Contact"
        },
        hero: {
          name: "Shubhankar Mukherjee",
          title: "Frontend Developer | React | Next.js | TypeScript",
          description: "Results-driven Frontend Developer with 5.5+ years of experience building scalable, performant web applications. Proven success delivering high-impact solutions across enterprise projects in finance and telecom sectors.",
          stats: [
            { value: "5.5+", label: "Years Experience" },
            { value: "6+", label: "Projects Delivered" },
            { value: "$700M+", label: "Transactions Facilitated" }
          ]
        },
        skills: {
          title: "Skills & Technologies",
          frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "HTML5", "CSS3", "Bootstrap"],
          backend: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Firebase"],
          tools: ["Git", "GitHub", "Docker", "Kubernetes", "Webpack", "Figma", "Storybook", "Jira"],
          categories: {
            frontend: "Frontend",
            backend: "Backend",
            tools: "Tools & Cloud"
          }
        },
        projects: {
          title: "Featured Projects",
          description: "Here are some of my recent projects that demonstrate problem-solving skills and technical expertise with modern web technologies.",
          items: [
            {
              title: "AI Analytics Dashboard",
              description: "Interactive data-driven dashboards for AI startup focusing on usability and performance",
              tags: ["React", "TypeScript", "HTML", "CSS"]
            },
            {
              title: "Enterprise Banking Platform",
              description: "Enterprise-grade loan application platform for Citi Bank facilitating $700M+ in transactions",
              tags: ["React", "Redux", "TypeScript", "REST APIs"]
            },
            {
              title: "Telecom Web Applications",
              description: "High-performance web applications for Visible (Verizon) with 25% SEO improvement",
              tags: ["Next.js", "React", "Redux", "TypeScript"]
            }
          ]
        },
        experience: {
          title: "Work Experience",
          items: [
            {
              position: "Freelance Web Developer",
              company: "AI Startup",
              period: "June 2025 - Present",
              location: "Remote",
              achievements: [
                "Building interactive data-driven dashboards for AI startup, focusing on usability and performance",
                "Leveraging React.js, TypeScript, HTML, and CSS to design responsive, scalable solutions",
                "Collaborating with founders and data engineers to translate analytics requirements into user-friendly dashboards",
                "Implementing reusable UI components to accelerate development and maintain design consistency"
              ]
            },
            {
              position: "Consultant - Frontend Developer | Tech Lead",
              company: "Capgemini (Client: Morgan Stanley)",
              period: "May 2024 - Jan 2025",
              location: "India",
              achievements: [
                "Led as Tech Lead, driving end-to-end delivery of enterprise-grade frontend solutions",
                "Designed scalable frontend architecture using React, Redux, TypeScript, and JavaScript",
                "Integrated Docker and Kubernetes workflows to streamline development and deployment pipelines",
                "Led agile ceremonies improving delivery accuracy and team efficiency"
              ]
            },
            {
              position: "Associate Technology L2 - Frontend Engineer",
              company: "Publicis Sapient (Client: Visible/Verizon)",
              period: "Nov 2021 - May 2024",
              location: "India",
              achievements: [
                "Migrated large-scale landing pages from React to Next.js, driving 25% increase in organic search traffic",
                "Designed centralized reusable component library, reducing frontend development time by 30%",
                "Engineered responsive, high-performance web applications improving page load times",
                "Conducted code reviews and mentored junior developers, raising team code quality"
              ]
            },
            {
              position: "System Engineer - Frontend Developer",
              company: "Tata Consultancy Services (Clients: Citi Bank, BMA)",
              period: "Jun 2019 - Nov 2021",
              location: "India",
              achievements: [
                "Delivered enterprise-grade loan application platform for Citi Bank, facilitating $700M+ in transactions",
                "Developed mobile-first, cross-browser compliant, and accessibility-ready applications",
                "Modernized legacy codebases by refactoring class-based components to functional components with hooks",
                "Introduced technical documentation and onboarding manuals, streamlining new developer ramp-up"
              ]
            }
          ]
        },
        contact: {
          title: "Get In Touch",
          description: "I'm always interested in new opportunities and exciting frontend projects. Let's discuss how we can work together.",
          email: "Email",
          linkedin: "LinkedIn",
          button: "Send Message"
        },
        footer: {
          copyright: "© 2025 Shubhankar Mukherjee. All rights reserved."
        }
      },
      ja: {
        nav: {
          about: "私について",
          projects: "プロジェクト",
          skills: "スキル",
          experience: "経歴",
          contact: "お問い合わせ"
        },
        hero: {
          name: "シュブハンカル・ムクハルジー",
          title: "フロントエンド開発者 | React | Next.js | TypeScript",
          description: "5.5年以上の経験を持つ成果重視のフロントエンド開発者。スケーラブルで高性能なWebアプリケーションの構築を専門とし、金融・通信業界でのエンタープライズプロジェクトで実績を積んでいます。",
          stats: [
            { value: "5.5+", label: "年の経験" },
            { value: "6+", label: "プロジェクト完了" },
            { value: "$700M+", label: "取引処理額" }
          ]
        },
        skills: {
          title: "スキル・技術",
          frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "HTML5", "CSS3", "Bootstrap"],
          backend: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Firebase"],
          tools: ["Git", "GitHub", "Docker", "Kubernetes", "Webpack", "Figma", "Storybook", "Jira"],
          categories: {
            frontend: "フロントエンド",
            backend: "バックエンド",
            tools: "ツール・クラウド"
          }
        },
        projects: {
          title: "注目のプロジェクト",
          description: "問題解決スキルと最新のWeb技術の専門知識を示す最近のプロジェクトをご紹介します。",
          items: [
            {
              title: "AI分析ダッシュボード",
              description: "ユーザビリティとパフォーマンスに焦点を当てたAIスタートアップ向けインタラクティブデータ駆動型ダッシュボード",
              tags: ["React", "TypeScript", "HTML", "CSS"]
            },
            {
              title: "エンタープライズバンキングプラットフォーム",
              description: "7億ドル以上の取引を処理するシティバンク向けエンタープライズ級ローン申請プラットフォーム",
              tags: ["React", "Redux", "TypeScript", "REST APIs"]
            },
            {
              title: "通信業界Webアプリケーション",
              description: "Visible（Verizon）向けの高性能Webアプリケーションで、SEOを25%改善",
              tags: ["Next.js", "React", "Redux", "TypeScript"]
            }
          ]
        },
        experience: {
          title: "職歴",
          items: [
            {
              position: "フリーランスWeb開発者",
              company: "AIスタートアップ",
              period: "2025年6月 - 現在",
              location: "リモート",
              achievements: [
                "AIスタートアップ向けのインタラクティブなデータ駆動型ダッシュボードを構築し、ユーザビリティとパフォーマンスに重点を置く",
                "React.js、TypeScript、HTML、CSSを活用してレスポンシブでスケーラブルなソリューションを設計",
                "創設者やデータエンジニアと連携し、分析要件をユーザーフレンドリーなダッシュボードに変換",
                "開発を加速し設計の一貫性を保つための再利用可能なUIコンポーネントを実装"
              ]
            },
            {
              position: "コンサルタント - フロントエンド開発者 | テックリード",
              company: "Capgemini（クライアント：Morgan Stanley）",
              period: "2024年5月 - 2025年1月",
              location: "インド",
              achievements: [
                "テックリードとして、エンタープライズ級フロントエンドソリューションのエンドツーエンド提供を主導",
                "React、Redux、TypeScript、JavaScriptを使用したスケーラブルなフロントエンドアーキテクチャを設計",
                "DockerとKubernetesワークフローを統合し、開発・デプロイメントパイプラインを効率化",
                "アジャイル儀式を主導し、提供の正確性とチーム効率を向上"
              ]
            },
            {
              position: "アソシエイト テクノロジー L2 - フロントエンドエンジニア",
              company: "Publicis Sapient（クライアント：Visible/Verizon）",
              period: "2021年11月 - 2024年5月",
              location: "インド",
              achievements: [
                "大規模ランディングページをReactからNext.jsに移行し、オーガニック検索トラフィックを25%増加",
                "中央集約型の再利用可能コンポーネントライブラリを設計し、フロントエンド開発時間を30%削減",
                "レスポンシブで高性能なWebアプリケーションを構築し、ページ読み込み時間を改善",
                "コードレビューを実施し、ジュニア開発者をメンタリング、チームのコード品質を向上"
              ]
            },
            {
              position: "システムエンジニア - フロントエンド開発者",
              company: "Tata Consultancy Services（クライアント：Citi Bank、BMA）",
              period: "2019年6月 - 2021年11月",
              location: "インド",
              achievements: [
                "シティバンク向けエンタープライズ級ローン申請プラットフォームを提供し、7億ドル以上の取引を促進",
                "モバイルファースト、クロスブラウザ対応、アクセシビリティ対応のアプリケーションを開発",
                "クラスベースコンポーネントをフックを使った関数型コンポーネントにリファクタリングし、レガシーコードベースを近代化",
                "技術文書とオンボーディングマニュアルを導入し、新しい開発者の立ち上がりを効率化"
              ]
            }
          ]
        },
        contact: {
          title: "お問い合わせ",
          description: "新しい機会やエキサイティングなフロントエンドプロジェクトに常に興味を持っています。一緒に働く方法について話し合いましょう。",
          email: "メール",
          linkedin: "LinkedIn",
          button: "メッセージを送る"
        },
        footer: {
          copyright: "© 2025 シュブハンカル・ムクハルジー. All rights reserved."
        }
      }
    }
  }
  