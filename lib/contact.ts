export interface ContactData {
  id: number;
  address: string;
  phone: string;
  email: string;
  opening_hours: string;
}

export interface ContactPage {
  contact: ContactData;
}

export async function getContact(): Promise<ContactData> {
  const emptyResponse: ContactData = {
    id: 0,
    address: "",
    phone: "",
    email: "",
    opening_hours: "",
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/contact-page`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.error(
        `Contact API Error: ${response.status} ${response.statusText}`,
      );

      return emptyResponse;
    }

    const result = await response.json();

    if (!result.contact && !result.data?.contact) {
      console.error("Contact API returned invalid data");

      return emptyResponse;
    }

    const contact = result.contact ?? result.data?.contact;

    const finalResponse: ContactData = {
      id: contact?.id ?? 0,

      address: contact?.address ?? "",

      phone: contact?.phone ?? "",

      email: contact?.email ?? "",

      opening_hours: contact?.opening_hours ?? "",
    };

    return finalResponse;
  } catch (error) {
    console.error("========================================");
    console.error("Contact API Error:", error);
    console.error("========================================");
    console.error(error);

    return emptyResponse;
  }
}
