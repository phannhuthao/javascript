const poundInput = document.getElementById('pound');
const ouncesInput = document.getElementById('ounces');
const stonesInput = document.getElementById('stones');
const killogramInput = document.getElementById('killogram');
const gramsInput = document.getElementById('grams');

poundInput.addEventListener('input', function() {
const poundValue = parseFloat(this.value);
ouncesInput.value = poundValue * 16;
stonesInput.value = poundValue / 14;
killogramInput.value = poundValue * 0.453592;
gramsInput.value = poundValue * 453.592;
});

ouncesInput.addEventListener('input', function() {
const ouncesValue = parseFloat(this.value);
poundInput.value = ouncesValue / 16;
stonesInput.value = ouncesValue / 224;
killogramInput.value = ouncesValue * 0.0283495;
gramsInput.value = ouncesValue * 28.3495;
});

stonesInput.addEventListener('input', function() {
const stonesValue = parseFloat(this.value);
poundInput.value = stonesValue * 14;
ouncesInput.value = stonesValue * 224;
killogramInput.value = stonesValue * 6.35029;
gramsInput.value = stonesValue * 6350.29;
});

killogramInput.addEventListener('input', function() {
const killogramValue = parseFloat(this.value);
poundInput.value = killogramValue * 2.20462;
ouncesInput.value = killogramValue * 35.274;
stonesInput.value = killogramValue / 6.35029;
gramsInput.value = killogramValue * 1000;
});

gramsInput.addEventListener('input', function() {
const gramsValue = parseFloat(this.value);
poundInput.value = gramsValue * 0.00220462;
ouncesInput.value = gramsValue * 0.035274;
stonesInput.value = gramsValue * 0.000157473;
killogramInput.value = gramsValue / 1000;
        });
