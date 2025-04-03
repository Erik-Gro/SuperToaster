interface ToasterConfig {
    marke: string;
    modell: string;
    leistung: number;
}

class Toaster {
    protected marke: string;
    protected modell: string;
    protected leistung: number;
    protected eingeschaltet: boolean;

    constructor(config: ToasterConfig) {
        this.marke = config.marke;
        this.modell = config.modell;
        this.leistung = config.leistung;
        this.eingeschaltet = false;
    }

    einschalten(): void {
        if (!this.eingeschaltet) {
            this.eingeschaltet = true;
            console.log(`${this.marke} ${this.modell} ist eingeschaltet.`);
        } else {
            console.log(`${this.marke} ${this.modell} ist bereits eingeschaltet.`);
        }
    }

    ausschalten(): void {
        if (this.eingeschaltet) {
            this.eingeschaltet = false;
            console.log(`${this.marke} ${this.modell} ist ausgeschaltet.`);
        } else {
            console.log(`${this.marke} ${this.modell} ist bereits ausgeschaltet.`);
        }
    }

    toasten(): void {
        if (this.eingeschaltet) {
            console.log(`${this.marke} ${this.modell} toastet.`);
            this.executeToastLogic(); // Aufruf der abstrakten Toast-Logik
        } else {
            console.log(`${this.marke} ${this.modell} muss eingeschaltet sein, um zu toasten.`);
        }
    }

    protected executeToastLogic(): void {
        // Abstrakte Methode, die von Subklassen implementiert wird
        console.log("Basis Toast-Logik.");
        // Hier könnte die Basis Toast-Logik stehen.
    }
}

interface SuperToasterConfig extends ToasterConfig {
    maxTemperatur: number;
}

class SuperToaster extends Toaster {
    private aktuelleTemperatur: number;
    private maxTemperatur: number;

    constructor(config: SuperToasterConfig) {
        super(config);
        this.maxTemperatur = config.maxTemperatur;
        this.aktuelleTemperatur = 0;
    }

    setTemperatur(temperatur: number): void {
        if (temperatur > this.maxTemperatur) {
            console.warn(`Warnung: Temperatur ${temperatur}°C überschreitet die maximale Temperatur von ${this.maxTemperatur}°C.`);
        }
        this.aktuelleTemperatur = temperatur;
    }

    protected executeToastLogic(): void {
        if (this.aktuelleTemperatur > 500) {
            console.error("Fehler: Temperatur zu hoch. Toastvorgang abgebrochen.");
            return;
        }

        console.log(`${this.marke} ${this.modell} toastet bei ${this.aktuelleTemperatur}°C.`);
        // Hier könnte die erweiterte Toast-Logik stehen.
        console.log("Super Toast-Logik.");
    }
}

function main(): void {
    const einfacherToaster = new Toaster({ marke: "MarkeA", modell: "Modell1", leistung: 1000 });
    const superToaster1 = new SuperToaster({ marke: "MarkeB", modell: "Modell2", leistung: 1500, maxTemperatur: 600 });
    const superToaster2 = new SuperToaster({ marke: "MarkeC", modell: "Modell3", leistung: 1800, maxTemperatur: 550 });

    einfacherToaster.einschalten();
    einfacherToaster.toasten();
    einfacherToaster.ausschalten();

    console.log("\n");

    superToaster1.einschalten();
    superToaster1.setTemperatur(450);
    superToaster1.toasten();
    superToaster1.ausschalten();

    console.log("\n");

    superToaster2.einschalten();
    superToaster2.setTemperatur(550);
    superToaster2.toasten();
    superToaster2.ausschalten();
}

main();
