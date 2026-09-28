// --------------------------------------------------
// Trust Item
// --------------------------------------------------

export interface TrustItem {
  title: string;
  description: string;
}

// --------------------------------------------------
// Trust
// --------------------------------------------------

export interface Trust {
  id: number;
  content: TrustItem[];
}

// --------------------------------------------------
// Get Trust Data
// --------------------------------------------------

export async function getTrust(): Promise<Trust> {
  const emptyResponse: Trust = {
    id: 0,
    content: [],
  };

  try {
    // ==================================================
    // API REQUEST
    // ==================================================

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trust`, {
      cache: "no-store",
    });

    // ==================================================
    // HTTP ERROR
    // ==================================================

    if (!response.ok) {
      console.error(
        `Trust API Error: ${response.status} ${response.statusText}`,
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

    if (!result.trust) {
      console.error("Trust API returned invalid data");

      return emptyResponse;
    }

    // ==================================================
    // MAP FINAL RESPONSE
    // ==================================================

    const finalResponse: Trust = {
      // ----------------------------------------
      // Trust ID
      // ----------------------------------------

      id: result.trust?.id ?? 0,

      // ----------------------------------------
      // Trust Content
      // ----------------------------------------

      content: Array.isArray(result.trust?.content)
        ? result.trust.content.map((item: any) => ({
            title: item.title ?? "",
            description: item.description ?? "",
          }))
        : [],
    };

    return finalResponse;
  } catch (error) {
    console.error("========================================");
    console.error("Trust API Error:", error);
    console.error("========================================");

    return emptyResponse;
  }
}
