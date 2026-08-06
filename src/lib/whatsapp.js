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
