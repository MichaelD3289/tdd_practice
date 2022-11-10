# My Summary

[Uncle Bob](https://en.wikipedia.org/wiki/Robert_C._Martin), one of the founders of the Agile Manifesto and a big advocate for Test Driven Development recommends the best way to start is small and consistently.

This repo is my journey toward improving at TDD. Each folder contains a new challenge with three files.

1. index - where the challenge logic is completed
1. index.test - where the unit tests are written
1. readme - description of the challenge

I will be using Typescript and Jest to perform the tests.

The first challenges are the Kata's from the [TDDmanifesto](https://tddmanifesto.com/exercises/).

Once those are completed they will gradually become more difficult challenges I find on the internet.

<br>

_Below is a great summary from [agilealliance](<https://www.agilealliance.org/glossary/tdd/#q=~(infinite~false~filters~(postType~(~'page~'post~'aa_book~'aa_event_session~'aa_experience_report~'aa_glossary~'aa_research_paper~'aa_video)~tags~(~'tdd))~searchTerm~'~sort~false~sortDirection~'asc~page~1)>)._
_all credit for this TDD summary goes to them. I simply have it here for quick reference_

# Definition

---

“Test-driven development” refers to a style of programming in which three activities are tightly interwoven: coding, testing (in the form of writing unit tests) and design (in the form of refactoring).

It can be succinctly described by the following set of rules:

- write a “single” unit test describing an aspect of the program
- run the test, which should fail because the program lacks that feature
- write “just enough” code, the simplest possible, to make the test pass
- “refactor” the code until it conforms to the [simplicity criteria](https://www.agilealliance.org/glossary/rules-of-simplicity/)
- repeat, “accumulating” unit tests over time
  <br>

# Expected Benefits

---

- many teams report significant reductions in defect rates, at the cost of a moderate increase in initial development effort
- the same teams tend to report that these overheads are more than offset by a reduction in effort in projects’ final phases
- although empirical research has so far failed to confirm this, veteran practitioners report that TDD leads to improved design qualities in the code, and more generally a higher degree of “internal” or technical quality, for instance improving the metrics of cohesion and coupling

<br>

# Common Pitfalls

---

**Typical individual mistakes include:**

- forgetting to run tests frequently
- writing too many tests at once
- writing tests that are too large or coarse-grained
- writing overly trivial tests, for instance omitting assertions
- writing tests for trivial code, for instance accessors

**Typical team pitfalls include:**

- partial adoption – only a few developers on the team use TDD
- poor maintenance of the test suite – most commonly leading to a test suite with a prohibitively long running time
- abandoned test suite (i.e. seldom or never run) – sometimes as a result of poor maintenance, sometimes as a result of team turnover

<br>

# Origins

---

While the idea of having test elaboration precede programming is not original to the Agile community, TDD constitutes a breakthrough insofar as it combines that idea with that of “developer testing”, providing developer testing with renewed respectability.

- 1976: publication of “Software Reliability” by Glenford Myers, which states as an “axiom” that “a developer should never test their own code” (Dark Ages of Developer Testing)
- 1990: testing discipline dominated by “black box” techniques, in particular in the form of “capture and replay” testing tools
- 1991: independent creation of a testing framework at Taligent with striking similarities to SUnit [(source)](https://shebanator.com/2007/08/21/a-brief-history-of-test-frameworks/)
- 1994: Kent Beck writes the SUnit testing framework for Smalltalk (source)
- 1998: article on [Extreme Programming](<https://www.agilealliance.org/glossary/xp/#q=~(infinite~false~filters~(postType~(~'post~'aa_book~'aa_event_session~'aa_experience_report~'aa_glossary~'aa_research_paper~'aa_video)~tags~(~'xp))~searchTerm~'~sort~false~sortDirection~'asc~page~1)>) mentions that “we usually write the test first”
- 1998 to 2002: “Test First” is elaborated into “Test Driven”, in particular on the [C2.com Wiki](http://wiki.c2.com/?TestDrivenDevelopment)
- 2000: [Mock Objects](<https://www.agilealliance.org/glossary/mocks/#q=~(infinite~false~filters~(postType~(~'page~'post~'aa_book~'aa_event_session~'aa_experience_report~'aa_glossary~'aa_research_paper~'aa_video)~tags~(~'mock*20objects))~searchTerm~'~sort~false~sortDirection~'asc~page~1)>) are among the novel techniques developed during that period
- 2003: publication of “Test Driven Development: By Example” by Kent Beck
- By 2006 TDD is a relatively mature discipline which has started encouraging further innovations derived from it, such as ATDD or BDD).

<br>

# Signs of Use

---

- [“code coverage”](https://en.wikipedia.org/wiki/Code_coverage) is a common approach to evidencing the use of TDD; while high coverage does not guarantee appropriate use of TDD, coverage below 80% is likely to indicate deficiencies in a team’s mastery of TDD
- version control logs should show that test code is checked in each time product code is checked in, in roughly comparable amounts

<br>

# Skill Levels

---

**Beginner**

- able to write a unit test prior to writing the corresponding code
- able to write code sufficient to make a failing test pass

**Intermediate**

- practices “test driven bug fixing”: when a defect is found, writes a test exposing the defect before correction
- able to decompose a compound program feature into a sequence of several unit tests to be written
- knows and can name a number of tactics to guide the writing of tests (for instance “when testing a recursive algorithm, first write a test for the recursion terminating case”)
- able to factor out reusable elements from existing unit tests, yielding situation-specific testing tools

**Advanced**

- able to formulate a “roadmap” of planned unit tests for a macroscopic features (and to revise it as necessary)
- able to “test drive” a variety of design paradigms: object-oriented, functional, event-drive
- able to “test drive” a variety of technical domains: computation, user interfaces, persistent data access…
