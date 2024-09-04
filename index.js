document.getElementById('emiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 12 / 100;
    const loanTenure = parseFloat(document.getElementById('loanTenure').value) * 12;

    const emi = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTenure)) / (Math.pow(1 + interestRate, loanTenure) - 1);

    document.getElementById('emiResult').innerText = emi.toFixed(2);
});
