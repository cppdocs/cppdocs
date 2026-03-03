---
title: "Default arguments"
source_path: "cpp/language/default_arguments"
category: "language"
---

Allows a function to be called without providing one or more trailing arguments.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 217 | C++98 | a default argument could be added to a non-template member function of a class template | prohibited |
| CWG 1344 | C++98 | default arguments added in the out-of-class definition of amember function could change it to a special member function | prohibited |
| CWG 1716 | C++98 | default arguments were evaluated each time the functionis called, even if the caller provided the arguments | evaluated only if noargument is provided for thecorresponding parameter |
| CWG 2082 | C++98 | default arguments were forbidden to use local variablesand preceding parameters in unevaluated context | unevaluated contextuse allowed |
| CWG 2233 | C++11 | parameters expanded from parameter packs couldnot appear after parameters with default arguments | allowed |
| CWG 2683 | C++98 | out-of-class definitions of the member functions of classtemplates' nested classes could have default arguments | prohibited |
