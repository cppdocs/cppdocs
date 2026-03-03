---
title: "std::locale::facet"
source_path: "cpp/locale/locale/facet"
header: "<locale>"
category: "locale"
---

std::locale::facet is the base class for facets. It provides a common base class so that locales could store pointers to the facets they implement in a single indexed container, and it abstracts support for facet reference counting.

## Declarations
```cpp
class locale::facet;
```

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2694 | C++98 | the definition of 'facet' was removed by the resolution of LWG issue 436 | added the definition back |

## See also
- [id](/cpp/locale/locale/id/)
