import type { PageCollectionItemBase, DataCollectionItemBase } from '@nuxt/content'

declare module '@nuxt/content' {
  interface DocsCollectionItem extends PageCollectionItemBase {}
  interface PostsCollectionItem extends PageCollectionItemBase {
    image: {
      src: string;
    };
    authors: {
      name: string;
      to: string;
      avatar: {
        src: string;
      };
    }[];
    date: Date;
    badge: {
      label: string;
    };
  }
  interface IndexCollectionItem extends PageCollectionItemBase {
    hero: {
      links: {
        label: string;
        to: string;
        icon?: string | undefined;
        size?: ("xs" | "sm" | "md" | "lg" | "xl") | undefined;
        trailing?: boolean | undefined;
        target?: string | undefined;
        color?: ("primary" | "secondary" | "neutral" | "error" | "warning" | "success" | "info") | undefined;
        variant?: ("solid" | "outline" | "subtle" | "soft" | "ghost" | "link") | undefined;
      }[];
    };
    sections: {
      title: string;
      description: string;
      id: string;
      orientation?: ("vertical" | "horizontal") | undefined;
      reverse?: boolean | undefined;
      features: {
        title: string;
        description: string;
        icon: string;
      }[];
    }[];
    features: {
      title: string;
      description: string;
      items: {
        title: string;
        description: string;
        icon: string;
      }[];
    };
    testimonials: {
      title: string;
      description: string;
      headline?: string | undefined;
      items: {
        quote: string;
        user: {
          name: string;
          description: string;
          to: string;
          target: string;
          avatar: {
            src: string;
            alt?: string | undefined;
            loading?: string | undefined;
            srcset?: string | undefined;
          };
        };
      }[];
    };
    cta: {
      title: string;
      description: string;
      links: {
        label: string;
        to: string;
        icon?: string | undefined;
        size?: ("xs" | "sm" | "md" | "lg" | "xl") | undefined;
        trailing?: boolean | undefined;
        target?: string | undefined;
        color?: ("primary" | "secondary" | "neutral" | "error" | "warning" | "success" | "info") | undefined;
        variant?: ("solid" | "outline" | "subtle" | "soft" | "ghost" | "link") | undefined;
      }[];
    };
  }
  interface PricingCollectionItem extends PageCollectionItemBase {
    plans: {
      title: string;
      description: string;
      price: {
        month: string;
        year: string;
      };
      billing_period: string;
      billing_cycle: string;
      button: {
        label: string;
        to: string;
        icon?: string | undefined;
        size?: ("xs" | "sm" | "md" | "lg" | "xl") | undefined;
        trailing?: boolean | undefined;
        target?: string | undefined;
        color?: ("primary" | "secondary" | "neutral" | "error" | "warning" | "success" | "info") | undefined;
        variant?: ("solid" | "outline" | "subtle" | "soft" | "ghost" | "link") | undefined;
      };
      features: string[];
      highlight?: boolean | undefined;
    }[];
    logos: {
      title: string;
      icons: string[];
    };
    faq: {
      title: string;
      description: string;
      items: {
        label: string;
        content: string;
        defaultOpen?: boolean | undefined;
      }[];
    };
  }
  interface BlogCollectionItem extends PageCollectionItemBase {}

  interface PageCollections {
    docs: DocsCollectionItem
    posts: PostsCollectionItem
    index: IndexCollectionItem
    pricing: PricingCollectionItem
    blog: BlogCollectionItem
  }

  interface Collections {
    docs: DocsCollectionItem
    posts: PostsCollectionItem
    index: IndexCollectionItem
    pricing: PricingCollectionItem
    blog: BlogCollectionItem
  }
}
