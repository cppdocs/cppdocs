---
title: "std::locale::global"
source_path: "cpp/locale/locale/global"
category: "locale"
---

Replaces the global C++ locale with loc, which means all future calls to the [std::locale](/cpp/locale/locale/) default constructor will now return a copy of loc. If loc has a name, also replaces the C locale as if by [std::setlocale](/cpp/locale/setlocale/)([LC_ALL](/cpp/locale/lc_categories/), loc.name().c_str());. This function is the only way to modify the global C++ locale, which is otherwise equivalent to [std::locale::classic](/cpp/locale/locale/classic/)() at program startup.

## Declarations
```cpp
static locale global( const locale& loc );
```

## Parameters
- `loc`: the new global C++ locale

## Return value
The previous value of the global C++ locale.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 8 | C++98 | it was unspecified whether other library functions (suchas std::setlocale) can modify the global C++ locale | specified (no otherlibrary functions allowed) |

## See also
- [(constructor)](/cpp/locale/locale/locale/)
- [classic](/cpp/locale/locale/classic/)
- [setlocale](/cpp/locale/setlocale/)
