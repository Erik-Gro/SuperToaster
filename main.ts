import { Toaster, SuperToaster, ToasterConfig, SuperToasterConfig } from './ToastersFactory';

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
