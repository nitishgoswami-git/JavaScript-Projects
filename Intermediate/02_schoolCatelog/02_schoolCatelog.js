class School {
    constructor(name, numberOfStudents, level) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.
  `);
    }
    static pickSubstituteTeacher(substituteTeachers) {
      let myIndex = Math.floor(substituteTeachers.length * Math.random());
      return substituteTeachers[myIndex];
    }
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents === "Integer") {
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log("Invalid input: numberOfStudents must be set to a Number.");
      }
    }
  }
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, numberOfStudents, "primary");
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, numberOfStudents, "HighSchool");
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      console.log(this._sportsTeams);
    }
  }
  lorraineHansbury = new PrimarySchool(
    "Lorraine Hansbury",
    514,
    "Students must be picked up by a parent, guardian, or a family member over the age of 13."
  );
  lorraineHansbury.quickFacts();
  School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ]);
  
  alSmith = new HighSchool("Al E. Smith", 415, [
    "Baseball",
    "Basketball",
    "Volleyball",
    "Track and Field",
  ]);
  
  alSmith.sportsTeams;
  