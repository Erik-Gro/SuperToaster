Softwaredokumentation: Toaster-Simulation

1. Produktbeschreibung

Diese Software simuliert die grundlegende Funktionalität von zwei Arten von Toastern: einem Standard-Toaster und einem erweiterten SuperToaster.

Toaster: Repräsentiert einen einfachen Toaster mit Eigenschaften für Marke, Modell und Leistung. Er kann ein- und ausgeschaltet werden und eine generische Toastfunktion ausführen.
SuperToaster: Erweitert die Funktionalität des Toasters um einen Temperatursensor und eine maximale Temperatureinstellung. Er ermöglicht das Einstellen einer Toasttemperatur und bricht den Toastvorgang mit einer Fehlermeldung ab, wenn die Temperatur 500°C übersteigt.
2. Klassen- und Objektmodell

Die Software besteht aus zwei Hauptklassen: Toaster und SuperToaster.

Klasse Toaster:
Eigenschaften (Attribute):
marke (string): Die Marke des Toasters.
modell (string): Das Modell des Toasters.
leistung (number): Die Leistungsaufnahme des Toasters.
eingeschaltet (boolean): Gibt an, ob der Toaster aktuell eingeschaltet ist.
Methoden:
constructor(config: ToasterConfig): Initialisiert ein neues Toaster-Objekt mit der bereitgestellten Konfiguration.
einschalten(): void: Schaltet den Toaster ein.
ausschalten(): void: Schaltet den Toaster aus.
toasten(): void: Startet den Toastvorgang. Es wird geprüft, ob der Toaster eingeschaltet ist, bevor getoastet wird.
protected executeToastLogic(): void: Eine geschützte Methode, die die grundlegende Toastlogik enthält. Diese ist dazu gedacht, von Unterklassen überschrieben zu werden.
Klasse SuperToaster:
Vererbung: Erweitert die Klasse Toaster.
Zusätzliche Eigenschaften (Attribute):
aktuelleTemperatur (number): Die aktuelle Toasttemperatur.
maxTemperatur (number): Die maximal zulässige Toasttemperatur.
Zusätzliche Methoden:
constructor(config: SuperToasterConfig): Initialisiert ein neues SuperToaster-Objekt mit der bereitgestellten Konfiguration, einschließlich der maximalen Temperatur.
setTemperatur(temperatur: number): void: Legt die gewünschte Toasttemperatur fest und gibt eine Warnung aus, wenn sie die maximale Temperatur überschreitet.
Überschreibung von executeToastLogic(): Überschreibt die executeToastLogic()-Methode der Klasse Toaster, um die Temperaturkontrolle zu implementieren. Wenn die aktuelleTemperatur 500°C übersteigt, wird eine Fehlermeldung ausgegeben und das Toasten abgebrochen. Andernfalls wird das Toasten bei der eingestellten Temperatur simuliert.
3. Quellcode-Struktur

Der Code ist in einer einzigen TypeScript-Datei enthalten.

4. Hauptprogramm

Die Funktion main() demonstriert die Funktionalität der Klassen Toaster und SuperToaster:

Erstellt eine Instanz der Klasse Toaster (einfacherToaster).
Schaltet den einfacherToaster ein, startet das Toasten und schaltet ihn dann wieder aus.
Erstellt zwei Instanzen der Klasse SuperToaster (superToaster1 und superToaster2).
Für superToaster1: Schaltet ihn ein, setzt eine Temperatur unter dem Grenzwert, startet das Toasten und schaltet ihn dann wieder aus.
Für superToaster2: Schaltet ihn ein, setzt eine Temperatur über 500°C, startet das Toasten (um die Temperaturkontrolle zu demonstrieren) und schaltet ihn dann wieder aus. Die Ausgabe der console.log-Anweisungen veranschaulicht das Verhalten beider Toastertypen.
5. Kommentare im Code

Der Code enthält Kommentare, um den Zweck von Klassen, Methoden und spezifischer Logik innerhalb der Methoden zu erklären.
