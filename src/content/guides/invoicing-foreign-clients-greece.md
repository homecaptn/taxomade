---
title: "Invoicing Foreign Clients From Greece: What Must Be on the Invoice (2026)"
description: "Invoicing foreign clients from Greece: mandatory fields, reverse charge wording, VIES check, myDATA invoice types 2.2/2.3, currency and common mistakes."
pubDate: 2026-11-13
category: "bookkeeping"
faq:
  - question: "What must a Greek invoice to a foreign client include?"
    answer: "Issue date, a unique sequential number, your Greek VAT number (EL + AFM) and your client's VAT or tax number, both full names and addresses, a description of the service, the service date if different, the net amount, the VAT rate and amount (or the legal reason why there is none), and the myDATA MARK once transmitted."
  - question: "What should I write on an invoice to an EU business from Greece?"
    answer: "No Greek VAT, both VAT numbers and a reverse charge note. Greek law requires the phrase \"Αντίστροφη επιβάρυνση\" (reverse charge); a bilingual line such as \"Reverse charge / Αντίστροφη επιβάρυνση – Articles 44 and 196 Directive 2006/112/EC\" covers both sides. Check the client's VAT number in VIES first."
  - question: "Which myDATA invoice type do I use for foreign clients?"
    answer: "For services: 2.2 for business clients in other EU countries, 2.3 for business clients outside the EU, and 2.1 for Greek business clients. Invoices without VAT also need a VAT exemption category; for services taxed abroad under the place-of-supply rules, that is category 4 (Article 18 of the VAT Code)."
  - question: "Can I invoice in English and in US dollars from Greece?"
    answer: "Yes. Greek law lets you state invoice amounts in any currency, but any VAT on the invoice must also be shown in euro, and your books are kept in euro. English invoices are common for foreign clients; AADE's free timologio app can issue them since its April 2026 update."
  - question: "When do I have to issue an invoice in Greece?"
    answer: "For services, by the 15th of the month after the service is completed at the latest. The invoice has to be transmitted to myDATA; through a provider, timologio or ERP software this happens in real time when you issue it."
  - question: "How do I correct a wrong invoice in Greece?"
    answer: "Once an invoice has been issued and transmitted to myDATA, you don't delete or renumber it. You issue a credit note (myDATA type 5.1) linked to the original invoice and then a new, correct invoice with the next number in the series."
---

An invoice to a client in Berlin, London or New York looks simple: name, amount, bank details. From Greece, it isn't. The invoice has to carry specific fields, the right VAT wording for the client's location, and it has to reach AADE's myDATA platform with the right invoice type and exemption code. Get one of these wrong and the invoice itself becomes the problem in an audit.

This guide is about the invoice. For the VAT logic behind it (place of supply, VIES registration, filing frequency), see [VAT for freelancers with foreign clients](/guides/vat-freelancers-greece-foreign-clients/).

## The short answer

- **Every invoice needs the standard fields:** date, unique sequential number, both VAT/tax numbers, both names and addresses, description, net amount, VAT rate and amount, or the legal reason for no VAT.
- **EU business client:** no Greek VAT, client's VAT number checked in VIES, reverse charge note. myDATA type **2.2**.
- **Non-EU business client:** no Greek VAT, note that the service is taxed outside Greece. myDATA type **2.3**.
- **Private client abroad:** for most services, Greek VAT at 24%, usually on a receipt rather than an invoice.
- **Timing:** by the 15th of the month after the service at the latest, and transmitted to myDATA when issued.
- **Currency and language:** any currency, any language. If VAT is shown, it must also appear in euro.

## What every Greek invoice must show

The mandatory content comes from [Article 9 of Law 4308/2014](https://www.taxheaven.gr/law/4308/2014/arthro/9) (the Greek accounting standards law), which mirrors [Article 226 of the EU VAT Directive 2006/112/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32006L0112). For a typical freelancer invoice, that means:

1. **Issue date.**
2. **A unique sequential number**, within one or more invoice series.
3. **Your VAT number** (for EU clients, written as EL + your AFM).
4. **Your client's VAT number** or, outside the EU, their foreign tax ID.
5. **Full name and address** of you and your client.
6. **Description and extent of the service** ("Backend development, October 2026, 62 hours").
7. **Date the service was completed**, if different from the issue date.
8. **Net amount**, per VAT rate or exempt.
9. **VAT rate and VAT amount**, or the legal basis for charging none.
10. **Special notes** where they apply: "Αντίστροφη επιβάρυνση" (reverse charge) when the client owes the VAT, or the legal provision for an exemption.

No signature is needed (art. 9(3)). Once transmitted, the invoice also carries its **MARK** (myDATA registration number) and, depending on your tool, a QR code. More on that in [myDATA explained](/guides/mydata-greece-explained/).

## EU business clients: reverse charge on the invoice

For ordinary B2B services to a company in another EU country, the invoice carries no Greek VAT. Your client accounts for VAT in their own country.

**Before the first invoice, check the client's VAT number in [VIES](https://ec.europa.eu/taxation_customs/vies/)** and keep a screenshot or the confirmation number with the invoice. An invalid number weakens the no-VAT treatment, and the VAT can land on you. Your own number also has to be VIES-registered with AADE; see the [VAT guide](/guides/vat-freelancers-greece-foreign-clients/) for that step.

The invoice must show the reverse charge. Greek law uses the phrase "Αντίστροφη επιβάρυνση"; your client's accountant expects English. A bilingual line covers both:

> *Reverse charge / Αντίστροφη επιβάρυνση – Articles 44 and 196 Directive 2006/112/EC. VAT to be accounted for by the recipient.*

In myDATA, use invoice type **2.2** (Τιμολόγιο Παροχής / Ενδοκοινοτική Παροχή Υπηρεσιών) with VAT category 0% and **VAT exemption category 4** ("Χωρίς ΦΠΑ – άρθρο 18 του Κώδικα ΦΠΑ", the place-of-supply article of the VAT Code, [Law 5144/2024](https://www.taxheaven.gr/law/5144/2024/arthro/18)).

Every month in which you issue such invoices, they also go on the **recapitulative statement (Φ4)**, due by the 26th of the following month. Its amounts should match your type 2.2 invoices in myDATA.

## Non-EU business clients: outside the scope of Greek VAT

For ordinary B2B services to a company in the US, UK, Switzerland or elsewhere outside the EU, the place of supply is the client's country. No Greek VAT, no reverse charge note. A clear wording:

> *Not subject to Greek VAT – place of supply outside Greece (Art. 18 Greek VAT Code, Art. 44 Directive 2006/112/EC).*

In myDATA, use invoice type **2.3** (Τιμολόγιο Παροχής / Παροχή Υπηρεσιών σε λήπτη Τρίτης Χώρας), again with **exemption category 4**. Instead of a VAT number, enter the client's foreign tax ID (an EIN for a US company, for example). Keep evidence that the client is a business: the contract and company details.

One difference from EU clients: since **2 November 2026**, invoices to businesses outside the EU fall under the e-invoicing mandate. They must be issued through an approved provider or AADE's free timologio or myDATAapp. A transition period runs to 31 January 2027 for businesses that declared their method in time ([A.1197/2026](https://www.taxheaven.gr/circulars/55463/a-1197-2026)). Details in [e-invoicing in Greece](/guides/e-invoicing-greece-explained/).

## Private clients abroad: Greek VAT usually applies

For ordinary services to private individuals (coaching, consulting, tutoring, design for a person rather than a company), the place of supply is generally Greece. You charge **Greek VAT at 24%**, wherever the client lives in the EU. Private clients usually receive a receipt for services (myDATA type 11.2) rather than an invoice.

Two exceptions to know: electronically supplied services to EU consumers (pre-recorded courses, downloads, subscriptions) above €10,000 a year follow the OSS rules, and private clients outside the EU depend on the service type. Both are covered in the [VAT guide](/guides/vat-freelancers-greece-foreign-clients/).

## Small business exemption: different wording

If you use the €10,000 [small business exemption](/guides/vat-small-business-exemption-greece/), your domestic invoices carry no VAT and the note *"Χωρίς Φόρο Προστιθέμενης Αξίας – Απαλλαγή μικρών επιχειρήσεων"*. Invoices to EU business clients still follow the reverse charge rules above, including VIES and the Φ4.

## Currency, exchange rate and language

**Currency.** You can invoice in USD, GBP or CHF. Article 9(2) of Law 4308/2014 only requires that any VAT amount on the invoice is also shown in euro. In myDATA, you report the currency (ISO code) and the exchange rate to the euro. Your books are kept in euro, so every foreign-currency invoice is converted. For VAT purposes, the VAT Code links the conversion to the exchange rate used for customs, which is based on ECB rates ([art. 24(3) and 25(3), Law 5144/2024](https://www.taxheaven.gr/law/5144/2024/arthro/24)). Agree the rate source with your accountant and apply it consistently. Payment differences from rate movements are booked as exchange gains or losses, not as a changed invoice.

**Language.** Law 4308/2014 does not prescribe a language for invoices. English invoices are normal for foreign clients, and since its April 2026 update [AADE's free timologio app](/guides/free-invoicing-greece-aade-timologio/) can issue them. Keep the Greek legal notes (reverse charge, exemption reason) in Greek next to the English wording. EU rules (Article 248a of the VAT Directive) let tax authorities request a translation for control purposes.

## Numbering and timing

Use **one continuous numbering series**, or separate series (for example, one for domestic and one for foreign clients) that your invoicing tool keeps unbroken. No gaps, no reused numbers, no "draft" invoices sent to clients and deleted afterwards.

For services, the invoice is due **by the 15th of the month after the service is completed** ([Law 4308/2014, art. 11](https://www.taxheaven.gr/circulars/20153/arora-oi-allages-sto-xrono-ekdoshs-twn-timologiwn-symfwna-me-ta-e-l-p)). For ongoing work, invoice each billing period by the 15th of the next month. Through a provider, timologio or ERP software, the invoice reaches myDATA in real time when you issue it.

## Common mistakes

**Invoicing from a PDF template.** An invoice made in Word or Canva doesn't reach myDATA by itself. For non-EU business clients it also isn't a valid e-invoice since November 2026.

**Wrong invoice type.** Type 2.1 for a German client, or 2.2 for a US client. Your 2.2 invoices should match your Φ4 statement, and AADE can compare the two.

**No VIES check.** Invoicing an EU company under reverse charge whose VAT number is invalid or not VIES-registered.

**Reverse charge wording on non-EU invoices.** A US or UK client owes no EU VAT. The correct note is "not subject to Greek VAT", not a reverse charge reference.

**Charging 0% to private clients.** "They live abroad" is not a reason for no VAT. For most services to individuals, 24% Greek VAT applies.

**Fixing mistakes by deleting.** A wrong invoice that was already issued is corrected with a credit note (myDATA type 5.1) linked to the original, then a new invoice. Not by deleting it in your tool.

**Missing exchange rate.** A USD invoice reported to myDATA without a rate, or converted at a different rate than in your books.

## Getting it right from the first invoice

Most of these mistakes happen once, in the setup: wrong default invoice type, wrong exemption code, no Φ4. At taxomade, we set up your invoice templates and exemption codes with you, then prepare and file your VAT returns, Φ4 statements and annual return as part of our [ongoing bookkeeping](/greece/ongoing-bookkeeping/), from €89 a month, in English, German or Greek. Send us a message on [WhatsApp](https://wa.me/491743426818) or through our contact form for a free compliance check of your current invoices.

## Frequently asked questions

### What must a Greek invoice to a foreign client include?

Issue date, a unique sequential number, your Greek VAT number (EL + AFM) and your client's VAT or tax number, both full names and addresses, a description of the service, the service date if different, the net amount, the VAT rate and amount (or the legal reason why there is none), and the myDATA MARK once transmitted.

### What should I write on an invoice to an EU business from Greece?

No Greek VAT, both VAT numbers and a reverse charge note. Greek law requires the phrase "Αντίστροφη επιβάρυνση" (reverse charge); a bilingual line such as "Reverse charge / Αντίστροφη επιβάρυνση – Articles 44 and 196 Directive 2006/112/EC" covers both sides. Check the client's VAT number in VIES first.

### Which myDATA invoice type do I use for foreign clients?

For services: 2.2 for business clients in other EU countries, 2.3 for business clients outside the EU, and 2.1 for Greek business clients. Invoices without VAT also need a VAT exemption category; for services taxed abroad under the place-of-supply rules, that is category 4 (Article 18 of the VAT Code).

### Can I invoice in English and in US dollars from Greece?

Yes. Greek law lets you state invoice amounts in any currency, but any VAT on the invoice must also be shown in euro, and your books are kept in euro. English invoices are common for foreign clients; AADE's free timologio app can issue them since its April 2026 update.

### When do I have to issue an invoice in Greece?

For services, by the 15th of the month after the service is completed at the latest. The invoice has to be transmitted to myDATA; through a provider, timologio or ERP software this happens in real time when you issue it.

### How do I correct a wrong invoice in Greece?

Once an invoice has been issued and transmitted to myDATA, you don't delete or renumber it. You issue a credit note (myDATA type 5.1) linked to the original invoice and then a new, correct invoice with the next number in the series.

*Rules as of November 2026 (sources: Council Directive 2006/112/EC arts. 44, 196 and 226; Law 4308/2014 (Greek Accounting Standards) arts. 9 and 11; VAT Code (Law 5144/2024) arts. 18, 24, 25 and 44a; AADE myDATA API documentation v2.0.2, appendices 8.1 and 8.3; A.1138/2020 as amended; A.1222/2020; A.1128/2025 as amended by A.1197/2026).*
