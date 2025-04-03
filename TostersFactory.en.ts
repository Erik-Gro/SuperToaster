interface ToasterConfig {
    brand: string;
    model: string;
    power: number;
}

class Toaster {
    protected brand: string;
    protected model: string;
    protected power: number;
    protected isOn: boolean;

    constructor(config: ToasterConfig) {
        this.brand = config.brand;
        this.model = config.model;
        this.power = config.power;
        this.isOn = false;
    }

    turnOn(): void {
        if (!this.isOn) {
            this.isOn = true;
            console.log(`${this.brand} ${this.model} is turned on.`);
        } else {
            console.log(`${this.brand} ${this.model} is already turned on.`);
        }
    }

    turnOff(): void {
        if (this.isOn) {
            this.isOn = false;
            console.log(`${this.brand} ${this.model} is turned off.`);
        } else {
            console.log(`${this.brand} ${this.model} is already turned off.`);
        }
    }

    toast(): void {
        if (this.isOn) {
            console.log(`${this.brand} ${this.model} is toasting.`);
            this.executeToastLogic(); // Call abstract toast logic
        } else {
            console.log(`${this.brand} ${this.model} must be turned on to toast.`);
        }
    }

    protected executeToastLogic(): void {
        // Abstract method to be implemented by subclasses
        console.log("Base toast logic.");
        // Here could be the base toast logic.
    }
}

interface SuperToasterConfig extends ToasterConfig {
    maxTemperature: number;
}

class SuperToaster extends Toaster {
    private currentTemperature: number;
    private maxTemperature: number;

    constructor(config: SuperToasterConfig) {
        super(config);
        this.maxTemperature = config.maxTemperature;
        this.currentTemperature = 0;
    }

    setTemperature(temperature: number): void {
        if (temperature > this.maxTemperature) {
            console.warn(`Warning: Temperature ${temperature}°C exceeds the maximum temperature of ${this.maxTemperature}°C.`);
        }
        this.currentTemperature = temperature;
    }

    protected executeToastLogic(): void {
        if (this.currentTemperature > 500) {
            console.error("Error: Temperature too high. Toasting aborted.");
            return;
        }

        console.log(`${this.brand} ${this.model} is toasting at ${this.currentTemperature}°C.`);
        // Here could be the extended toast logic.
        console.log("Super toast logic.");
    }
}

function main(): void {
    const simpleToaster = new Toaster({ brand: "BrandA", model: "Model1", power: 1000 });
    const superToaster1 = new SuperToaster({ brand: "BrandB", model: "Model2", power: 1500, maxTemperature: 600 });
    const superToaster2 = new SuperToaster({ brand: "BrandC", model: "Model3", power: 1800, maxTemperature: 550 });

    simpleToaster.turnOn();
    simpleToaster.toast();
    simpleToaster.turnOff();

    console.log("\n");

    superToaster1.turnOn();
    superToaster1.setTemperature(450);
    superToaster1.toast();
    superToaster1.turnOff();

    console.log("\n");

    superToaster2.turnOn();
    superToaster2.setTemperature(550);
    superToaster2.toast();
    superToaster2.turnOff();
}

main();
