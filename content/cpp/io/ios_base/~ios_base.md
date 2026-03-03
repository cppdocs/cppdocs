---
title: "std::ios_base::~ios_base"
source_path: "cpp/io/ios_base/~ios_base"
category: "io"
---

Destroys the ios_base object.

## Declarations
```cpp
virtual ~ios_base();
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3434 | C++98 | the destructor was not required to reclaim memory for iarray and parray | required |
