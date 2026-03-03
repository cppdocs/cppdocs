---
title: "std::mask_array<T>::mask_array"
source_path: "cpp/numeric/valarray/mask_array/mask_array"
category: "numeric"
since: "C++11"
---

1) The default constructor is declared private and not defined(until C++11)explicitly defined as deleted(since C++11): mask_array is not [DefaultConstructible](/cpp/named_req/defaultconstructible/).

## Declarations
```cpp
private:
mask_array();
```
_(until C++11)_

```cpp
public:
mask_array() = delete;
```
_(since C++11)_

```cpp
public:
mask_array( const mask_array& other );
```

## Parameters
- `other`: mask_array to initialize with

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 253 | C++98 | the copy constructor was private | made public |
