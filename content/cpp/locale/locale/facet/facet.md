---
title: "std::locale::facet::facet"
source_path: "cpp/locale/locale/facet/facet"
header: "<locale>"
category: "locale"
---

1) Creates a facet with starting reference count refs. If refs is non-zero, the facet will not be deleted when the last locale referencing it goes out of scope. A facet with static or dynamic storage duration should always be constructed with a non-zero refs.

## Declarations
```cpp
explicit facet( std::size_t refs = 0 );
```

```cpp
facet( const facet& ) = delete;
```
