// Build and open a WhatsApp message with the contact form details.
export function buildWhatsAppMessage(formData) {
  if (formData.requestType === 'shop') {
    const itemLines = (formData.items || []).map(
      (item) => `- ${item.name} x${item.quantity}: ₹${(item.amount * item.quantity).toLocaleString('en-IN')}`,
    );
    return [
      'New Shop Order Request',
      `Name: ${formData.name || 'N/A'}`,
      `Email: ${formData.email || 'N/A'}`,
      `Verified Phone: ${formData.phone || 'N/A'}`,
      '',
      'Delivery address:',
      formData.deliveryAddress?.addressLine1 || formData.addressLine1 || 'N/A',
      ...(formData.deliveryAddress?.landmark || formData.landmark
        ? [`Landmark: ${formData.deliveryAddress?.landmark || formData.landmark}`]
        : []),
      [
        formData.deliveryAddress?.city || formData.city,
        formData.deliveryAddress?.state || formData.state,
        formData.deliveryAddress?.postalCode || formData.postalCode,
      ].filter(Boolean).join(', '),
      ...(formData.deliveryLocation
        ? [`Map pin: https://www.google.com/maps?q=${formData.deliveryLocation.latitude},${formData.deliveryLocation.longitude}`]
        : []),
      '',
      'Selected products:',
      ...itemLines,
      '',
      `Estimated total: ₹${Number(formData.total || 0).toLocaleString('en-IN')}`,
      formData.message || 'Please confirm availability, delivery details, and payment options.',
    ].join('\n');
  }

  return [
    formData.requestType === 'treatment'
      ? 'New Treatment Booking Request'
      : 'New Consultation Request',
    `Name: ${formData.name || 'N/A'}`,
    `Email: ${formData.email || 'N/A'}`,
    `Verified Phone: ${formData.phone || 'N/A'}`,
    ...(formData.treatment ? [`Treatment: ${formData.treatment}`] : []),
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
