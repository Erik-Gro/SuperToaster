# Softwaredokumentation: Toaster-Simulation

## 1. Produktbeschreibung

Diese Software simuliert die grundlegenden Funktionen von zwei Arten von Toastern: einem Standard-Toaster und einem erweiterten SuperToaster.

- **Toaster**: Repräsentiert einen einfachen Toaster mit Attributen wie Marke, Modell und Leistung. Er kann ein- und ausgeschaltet werden und eine generische Toastfunktion ausführen.
- **SuperToaster**: Erweitert die Funktionalität des Toasters durch einen Temperatursensor und eine maximale Temperatureinstellung. Er erlaubt das Einstellen der Toasttemperatur und bricht den Toastvorgang ab, wenn die Temperatur den Grenzwert überschreitet.

---

## 2. Klassen- und Objektmodell

Die Software besteht aus zwei Hauptklassen: `Toaster` und `SuperToaster`.

### Klasse: Toaster

- **Eigenschaften (Attribute):**
  - `marke` (string): Die Marke des Toasters.
  - `modell` (string): Das Modell des Toasters.
  - `leistung` (number): Die Leistungsaufnahme des Toasters.
  - `eingeschaltet` (boolean): Gibt an, ob der Toaster aktuell eingeschaltet ist.

- **Methoden:**
  - `constructor(config: ToasterConfig)`: Initialisiert ein neues Toaster-Objekt mit der bereitgestellten Konfiguration.
  - `einschalten()`: Schaltet den Toaster ein.
  - `ausschalten()`: Schaltet den Toaster aus.
  - `toasten()`: Startet den Toastvorgang und überprüft zuvor, ob der Toaster eingeschaltet ist.
  - `protected executeToastLogic()`: Eine geschützte Methode, die die grundlegende Toast-Logik enthält und von Unterklassen überschrieben werden kann.

### Klasse: SuperToaster

- **Vererbung**: Erweitert die Klasse `Toaster`.

- **Zusätzliche Eigenschaften:**
  - `aktuelleTemperatur` (number): Die aktuelle Toasttemperatur.
  - `maxTemperatur` (number): Die maximal zulässige Toasttemperatur.

- **Zusätzliche Methoden:**
  - `constructor(config: SuperToasterConfig)`: Initialisiert ein neues SuperToaster-Objekt mit der bereitgestellten Konfiguration, einschließlich der maximalen Temperatur.
  - `setTemperatur(temperatur: number)`: Legt die gewünschte Toasttemperatur fest und gibt eine Warnung aus, wenn die maximale Temperatur überschritten wird.
  - **Überschreibung von `executeToastLogic()`**: Implementiert die Temperaturkontrolle durch Überschreiben der Methode `executeToastLogic()` der Klasse `Toaster`. Bricht den Toastvorgang ab, wenn die Temperatur 500°C übersteigt.

---

## 3. Quellcode-Struktur

Der gesamte Code befindet sich in einer einzigen TypeScript-Datei.

---

## 4. Hauptprogramm

Die Funktion `main()` demonstriert die Funktionalität der Klassen `Toaster` und `SuperToaster`:

1. Erstellt eine Instanz der Klasse `Toaster` (`einfacherToaster`).
   - Schaltet ihn ein, startet den Toastvorgang und schaltet ihn wieder aus.
2. Erstellt zwei Instanzen der Klasse `SuperToaster` (`superToaster1` und `superToaster2`).
   - Für `superToaster1`: Schaltet ihn ein, setzt eine Temperatur unterhalb des Grenzwerts, startet den Toastvorgang und schaltet ihn wieder aus.
   - Für `superToaster2`: Schaltet ihn ein, setzt eine Temperatur über 500°C, startet den Toastvorgang (um die Temperaturkontrolle zu demonstrieren) und schaltet ihn wieder aus. Die Konsolenausgabe zeigt die Logik der Temperaturkontrolle.

---

## 5. Kommentare im Code

Der Code enthält Kommentare, die den Zweck von Klassen, Methoden und spezifischer Logik innerhalb der Methoden erläutern.

---

Du kannst diesen Text direkt in deine Markdown-Datei kopieren. Es wird gut aussehen, wenn du es in einem Markdown-Viewer wie auf GitHub, Visual Studio Code, oder anderen Tools renderst.
