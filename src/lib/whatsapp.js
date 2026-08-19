// Build and open a WhatsApp message with the contact form details.
export function buildWhatsAppMessage(formData) {
  return [
    'New Contact Submission',
    `Name: ${formData.name || 'N/A'}`,
    `Email: ${formData.email || 'N/A'}`,
    `Phone: ${formData.phone || 'N/A'}`,
    `Preferred Date: ${formData.appointmentDate || 'N/A'}`,
    `Preferred Time: ${formData.appointmentTime || 'N/A'}`,
    `Consultation Type: ${formData.consultationType || 'N/A'}`,
    `Message: ${formData.message || 'N/A'}`,
  ].join('\n');
}

export function buildShopWhatsAppMessage(items, total, phone) {
  const lines = items.map((item) => `- ${item.name} x${item.quantity}: ₹${(item.amount * item.quantity).toLocaleString('en-IN')}`);
  return [
    'New Shop Order',
    `Phone: ${phone}`,
    '',
    'Selected packages:',
    ...lines,
    '',
    `Total: ₹${total.toLocaleString('en-IN')}`,
    'Please share availability and payment details.',
  ].join('\n');
}

export function createShopWhatsAppUrl(items, total, phone, phoneNumber = '917619529616') {
  const cleanNumber = phoneNumber.replace(/[^\d]/g, '');
  const message = encodeURIComponent(buildShopWhatsAppMessage(items, total, phone));
  return `https://wa.me/${cleanNumber}?text=${message}`;
}

export function sendShopWhatsAppMessage(items, total, phone, phoneNumber = '917619529616') {
  const url = createShopWhatsAppUrl(items, total, phone, phoneNumber);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return { success: true, message: 'WhatsApp order opened', url };
}

export function createWhatsAppUrl(formData, phoneNumber = '917619529616') {
  const cleanNumber = phoneNumber.replace(/[^\d]/g, '');
  const message = encodeURIComponent(buildWhatsAppMessage(formData));
  return `https://wa.me/${cleanNumber}?text=${message}`;
}

export async function sendWhatsAppMessage(formData, phoneNumber = '917619529616') {
  try {
    const url = createWhatsAppUrl(formData, phoneNumber);

    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }

    return { success: true, message: 'WhatsApp message opened', url };
  } catch (error) {
    console.error('Error opening WhatsApp message:', error);
    throw error;
  }
}
