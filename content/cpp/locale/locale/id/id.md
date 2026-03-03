---
title: "std::locale::id::id"
source_path: "cpp/locale/locale/id/id"
header: "<locale>"
category: "locale"
---

1) Default constructor: creates an object of type [std::locale::id](/cpp/locale/locale/id/) with implementation-specific content.

## Declarations
```cpp
id();
```

```cpp
id( const id& ) = delete;
```

## Notes
Because locales and facets must be available for the IO stream objects with static storage duration, such as [std::cout](/cpp/io/cout/), typical implementations let implicit default constructor zero-initialize the contents of [std::locale::id](/cpp/locale/locale/id/) during static initialization (before constructors run for static objects), and when a facet is added to any locale for the first time, the locale completes initialization of the facet's id.
