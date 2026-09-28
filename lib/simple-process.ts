// --------------------------------------------------
// Simple Process Step
// --------------------------------------------------

export interface SimpleProcessStep {
  number: string;
  title: string;
  description: string;
  image: string | null;
}

// --------------------------------------------------
// Simple Process Content 1
// --------------------------------------------------

export interface SimpleProcessContent1 {
  title: string;
  highlight: string;
  description: string;
}

// --------------------------------------------------
// Simple Process
// --------------------------------------------------

export interface SimpleProcess {
  id: number;

  content1: SimpleProcessContent1;

  content2: SimpleProcessStep[];
}

// --------------------------------------------------
// Get Simple Process Data
// --------------------------------------------------

export async function getSimpleProcess(): Promise<SimpleProcess> {
  const emptyResponse: SimpleProcess = {
    id: 0,

    content1: {
      title: "",
      highlight: "",
      description: "",
    },

    content2: [],
  };

  try {
    // ==================================================
    // API REQUEST
    // ==================================================

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/simple-process`,
      {
        cache: "no-store",
      },
    );

    // ==================================================
    // HTTP ERROR
    // ==================================================

    if (!response.ok) {
      console.error(
        `Simple Process API Error: ${response.status} ${response.statusText}`,
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

    if (!result.simple_process) {
      console.error("Simple Process API returned invalid data");

      return emptyResponse;
    }

    // ==================================================
    // MAP FINAL RESPONSE
    // ==================================================

    const finalResponse: SimpleProcess = {
      // ----------------------------------------
      // Simple Process ID
      // ----------------------------------------

      id: result.simple_process?.id ?? 0,

      // ----------------------------------------
      // Content 1
      // ----------------------------------------

      content1: {
        title: result.simple_process?.content1?.title ?? "",

        highlight: result.simple_process?.content1?.highlight ?? "",

        description: result.simple_process?.content1?.description ?? "",
      },

      // ----------------------------------------
      // Content 2 - Process Steps
      // ----------------------------------------

      content2: Array.isArray(result.simple_process?.content2)
        ? result.simple_process.content2.map((step: any) => ({
            number: step.number ?? "",
            title: step.title ?? "",
            description: step.description ?? "",
            image: step.image ?? null,
          }))
        : [],
    };

    return finalResponse;
  } catch (error) {
    console.error("========================================");
    console.error("Simple Process API Error:", error);
    console.error("========================================");

    return emptyResponse;
  }
}
