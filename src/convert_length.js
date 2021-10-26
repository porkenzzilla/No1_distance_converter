import readlineSync from 'readline-sync';

const units = [ "m", "cm", "in", "ft", "mm", "yd", "km" ];
const conversions = {
	m: {
		system: "metric",
		factor: 1
	},
	cm: {
		system: "metric",
		factor: 1 / 100
	},
	mm: {
		system: "metric",
		factor: 1 / 1000
	},
	km: {
		system: "metric",
		factor: 1 * 1000
	},
	"in": {
		system: "imperial",
		factor: 1
	},
	ft: {
		system: "imperial",
		factor: 12
	},
	yd: {
		system: "imperial",
		factor: 36
	}
};

const anchors = {
	metric: {
		unit: 'm',
		ratio: 1 / 0.0254
	},
	imperial: {
		unit: 'in',
		ratio: 0.0254
	}
};

export const getFromUnit = () => readlineSync.question('From what unit: ');
export const getValue = () => readlineSync.question('How much: ');
export const getToUnit = () => readlineSync.question('To what unit: ');

export function convertDistance (getFromUnit, getValue, getToUnit) {
	getFromUnit = getFromUnit();
	getValue = getValue();
	getToUnit = getToUnit();

	if (getFromUnit === getToUnit) {
		return getValue;
	}

	let fromUnitData = conversions[getFromUnit];
	let toUnitData = conversions[getToUnit];
	let anchor = getValue * fromUnitData.factor;

	if (fromUnitData.system !== toUnitData.system) {
		anchor *= anchors[fromUnitData.system].ratio;
	}

	let expectedValue = anchor / toUnitData.factor;
	if (false) {
		expectedValue = Math.round(expectedValue);
	} else if (typeof getValue === 'number' && isFinite(getValue)) {
		expectedValue = expectedValue.toFixed(2);
	}
	console.log({ from: getFromUnit, to: getToUnit, value: expectedValue });
};
