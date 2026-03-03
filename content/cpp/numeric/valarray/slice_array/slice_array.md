---
title: "std::slice_array<T>::slice_array"
source_path: "cpp/numeric/valarray/slice_array/slice_array"
category: "numeric"
since: "C++11"
---

1) The default constructor is declared private and not defined(until C++11)explicitly defined as deleted(since C++11): slice_array is not [DefaultConstructible](/cpp/named_req/defaultconstructible/).

## Declarations
```cpp
private:
slice_array();
```
_(until C++11)_

```cpp
public:
slice_array() = delete;
```
_(since C++11)_

```cpp
public:
slice_array( const slice_array& other );
```

## Parameters
- `other`: slice_array to initialize with

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 253 | C++98 | the copy constructor was private | made public |
