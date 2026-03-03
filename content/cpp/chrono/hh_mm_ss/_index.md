---
title: "std::chrono::hh_mm_ss"
source_path: "cpp/chrono/hh_mm_ss"
header: "<chrono>"
---

The class template hh_mm_ss splits a [std::chrono::duration](/cpp/chrono/duration/) into a "broken down" time such as hours:minutes:seconds, with the precision of the split determined by the Duration template parameter. It is primarily a formatting tool.

## Declarations
```cpp
template< class Duration >
class hh_mm_ss;
```
_(since C++20)_
