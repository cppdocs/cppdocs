---
title: "std::error_category::error_category"
source_path: "cpp/error/error_category/error_category"
category: "error"
since: "C++11"
---

1) Constructs the error category object.

## Declarations
```cpp
constexpr error_category() noexcept;
```
_(since C++11)_

```cpp
error_category( const error_category& ) = delete;
```
_(since C++11)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2145 | C++11 | error_category was not constructible | default constructor added |
