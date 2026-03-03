---
title: "std::gslice_array<T>::gslice_array"
source_path: "cpp/numeric/valarray/gslice_array/gslice_array"
category: "numeric"
since: "C++11"
---

1) The default constructor is declared private and not defined(until C++11)explicitly defined as deleted(since C++11): gslice_array is not [DefaultConstructible](/cpp/named_req/defaultconstructible/).

## Declarations
```cpp
private:
gslice_array();
```
_(until C++11)_

```cpp
public:
gslice_array() = delete;
```
_(since C++11)_

```cpp
public:
gslice_array( const gslice_array& other );
```

## Parameters
- `other`: gslice_array to initialize with

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 253 | C++98 | the copy constructor was private | made public |
