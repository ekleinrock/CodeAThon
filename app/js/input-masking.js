document.addEventListener('DOMContentLoaded', () => {
    const cleave = new Cleave('#ccn', {
      creditCard: true,
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const cleave = new Cleave('#percent-field', {
        numeral: true,
        numeralThousandsGroupStyle: 'none'
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const cleave = new Cleave('#currency-field', {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand'
    });
});
