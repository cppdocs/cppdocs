---
title: "std::ctype<char>::~ctype"
source_path: "cpp/locale/ctype_char/~ctype"
header: "<locale>"
category: "locale"
---

Destructs a [std::ctype](/cpp/locale/ctype/)<char> facet. This destructor is protected and virtual (due to [base class](/cpp/locale/locale/facet/) destructor being virtual). An object of type [std::ctype](/cpp/locale/ctype/)<char>, like most facets, can only be destroyed when the last [std::locale](/cpp/locale/locale/) object that implements this facet goes out of scope or if a user-defined class is derived from [std::ctype](/cpp/locale/ctype/)<char> and implements a public destructor.

## Declarations
```cpp
protected: ~ctype();
```
