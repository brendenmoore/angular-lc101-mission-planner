import { Component, OnInit } from "@angular/core";
import { crewMember } from "./crewMember";

@Component({
  selector: "app-crew",
  templateUrl: "./crew.component.html",
  styleUrls: ["./crew.component.css"],
})
export class CrewComponent implements OnInit {
  crew: crewMember[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true },
  ];

  selectedMember: crewMember;
  editMemberInput: string;
  nameInput: string;

  constructor() {}

  ngOnInit() {}

  add(memberName: string, isFirst: boolean) {
    if (this.isDuplicate(memberName)) {
      alert("Error: Cannot allow duplicate names.");
    } else {
      this.crew.push({ name: memberName, firstMission: isFirst });
      this.nameInput = "";
    }
  }
  remove(member: crewMember) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }
  edit(member: crewMember) {
    this.selectedMember = member;
    this.editMemberInput = member.name;
  }
  save(name: string, member: crewMember) {
    if (this.isDuplicate(name)) {
      alert("Error: Cannot allow duplicate names.");
    } else {
      member["name"] = name;
      this.selectedMember = null;
      this.editMemberInput = "";
    }
  }
  isDuplicate(name: string) {
    if (this.selectedMember) {
      return false;
    } else {
      return this.crew.filter((member) => member.name === name).length;
    }
  }
}
