export class Contact {
  title: string;
  firstName: string;
  lastName: string;
  login: string;
  phone?: string;
  email?: string;

  constructor(
    title: string,
    firstName: string,
    lastName: string,
    login: string,
    phone: string = "N/A",
    email: string = "N/A"
  ) {
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = login;
    this.phone = phone;
    this.email = email;
  }
}

export class AssociationBuilder {
  public name: string;
  public description?: string;
  public firstContact?: Contact;
  public secondContact?: Contact;
  public thirdContact?: Contact;
  public websiteURL?: string;
  public facebookURL?: string;
  public published: Boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  public addDescription(description: string): void {
    this.description = description;
  }

  public addContact(contact: Contact): Boolean {
    if (this.firstContact === undefined) {
      this.firstContact = contact;
    } else if (this.secondContact === undefined) {
      this.secondContact = contact;
    } else if (this.thirdContact === undefined) {
      this.thirdContact = contact;
    } else {
      return false;
    }

    return true;
  }

  public addWebsiteURL(websiteURL: string): void {
    this.websiteURL = websiteURL;
  }

  public addFacebookURL(facebookURL: string): void {
    this.facebookURL = facebookURL;
  }

  public setPublishStatus(publishStatus: Boolean): void {
    this.published = publishStatus;
  }
}

export class Association {
  name: string;
  description?: string;
  firstContact?: Contact;
  secondContact?: Contact;
  thirdContact?: Contact;
  websiteURL?: string;
  facebookURL?: string;
  published: Boolean;

  constructor(associationBuilder: AssociationBuilder) {
    this.name = associationBuilder.name;
    this.description = associationBuilder.description;
    this.firstContact = associationBuilder.firstContact;
    this.secondContact = associationBuilder.secondContact;
    this.thirdContact = associationBuilder.thirdContact;
    this.websiteURL = associationBuilder.websiteURL;
    this.facebookURL = associationBuilder.facebookURL;
    this.published = associationBuilder.published;
  }
}
