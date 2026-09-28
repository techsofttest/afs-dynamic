// --------------------------------------------------
// Who We Are Content
// --------------------------------------------------

export interface WhoWeAreContent {
  title: string;
  highlight: string;
  descriptions: string[];
  points: string[];
  image: string | null;

  final_content: {
    title: string;
    subtitle: string;
  };
}

// --------------------------------------------------
// Who We Are
// --------------------------------------------------

export interface WhoWeAre {
  id: number;
  content1: WhoWeAreContent;
}

// --------------------------------------------------
// Get Who We Are Data
// --------------------------------------------------

export async function getWhoWeAre(): Promise<WhoWeAre> {
  const emptyResponse: WhoWeAre = {
    id: 0,

    content1: {
      title: "",
      highlight: "",
      descriptions: [],
      points: [],
      image: null,

      final_content: {
        title: "",
        subtitle: "",
      },
    },
  };

  try {
    // ==================================================
    // API REQUEST
    // ==================================================

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/who-we-are`,
      {
        cache: "no-store",
      },
    );

    // ==================================================
    // HTTP ERROR
    // ==================================================

    if (!response.ok) {
      console.error(
        `Who We Are API Error: ${response.status} ${response.statusText}`,
      );

      return emptyResponse;
    }

    // ==================================================
    // RAW API RESPONSE
    // ==================================================

    const result = await response.json();

    // ==================================================
    // SUCCESS CHECK
    // ==================================================

    if (!result.who_we_are) {
      console.error("Who We Are API returned invalid data");

      return emptyResponse;
    }

    // ==================================================
    // MAP FINAL RESPONSE
    // ==================================================

    const finalResponse: WhoWeAre = {
      // ----------------------------------------
      // Who We Are ID
      // ----------------------------------------

      id: result.who_we_are?.id ?? 0,

      // ----------------------------------------
      // Content 1
      // ----------------------------------------

      content1: {
        title: result.who_we_are?.content1?.title ?? "",

        highlight: result.who_we_are?.content1?.highlight ?? "",

        descriptions: Array.isArray(result.who_we_are?.content1?.descriptions)
          ? result.who_we_are.content1.descriptions
          : [],

        points: Array.isArray(result.who_we_are?.content1?.points)
          ? result.who_we_are.content1.points
          : [],

        image: result.who_we_are?.content1?.image ?? null,

        final_content: {
          title: result.who_we_are?.content1?.final_content?.title ?? "",

          subtitle: result.who_we_are?.content1?.final_content?.subtitle ?? "",
        },
      },
    };

    return finalResponse;
  } catch (error) {
    console.error("========================================");
    console.error("Who We Are API Error:", error);
    console.error("========================================");

    return emptyResponse;
  }
}
