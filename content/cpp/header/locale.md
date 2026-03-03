---
title: "Standard library header <locale>"
source_path: "cpp/header/locale"
category: "header"
---

This header is part of the [text processing](/cpp/text/) library.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 71 | C++98 | the parameter end of time_get::do_get_monthnamewas missing in the synopsis | added |
| LWG 75 | C++98 | the type of the parameter state of members length and do_lengthof codecvt and codecvt_byname was const stateT& in the synopsis | corrected to stateT& |
| LWG 124 | C++98 | the return types of members do_scan_is and do_scan_notof codecvt_byname were const char* in the synopsis | corrected toconst charT* |
| LWG 228 | C++98 | all virtual member functions of XXX_bynamefacets were listed in the synopses | only lists the destructor(removed all othervirtual member functions) |
| LWG 268 | C++98 | the semicolons following the declarations of the default constructorand copy constructor of std::locale were missing in the synopsis | added |
| LWG 1298 | C++98 | there was an explicit specializationctype_byname<char> in the synopsis | removed |
