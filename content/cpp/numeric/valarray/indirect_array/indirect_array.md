---
title: "std::indirect_array<T>::indirect_array"
source_path: "cpp/numeric/valarray/indirect_array/indirect_array"
category: "numeric"
since: "C++11"
---

1) The default constructor is declared private and not defined(until C++11)explicitly defined as deleted(since C++11): indirect_array is not [DefaultConstructible](/cpp/named_req/defaultconstructible/).

## Declarations
```cpp
private:
indirect_array();
```
_(until C++11)_

```cpp
public:
indirect_array() = delete;
```
_(since C++11)_

```cpp
public:
indirect_array( const indirect_array& other );
```

## Parameters
- `other`: indirect_array to initialize with

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 253 | C++98 | the copy constructor was private | made public |
