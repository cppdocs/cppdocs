---
title: "operator==,!=(std::student_t_distribution)"
source_path: "cpp/numeric/random/student_t_distribution/operator_cmp"
category: "numeric"
since: "C++11"
---

Compares two distribution objects. Two distribution objects are equal when parameter values and internal state is the same.

## Declarations
```cpp
friend bool operator==( const student_t_distribution& lhs,
const student_t_distribution& rhs );
```
_(since C++11)_

```cpp
friend bool operator!=( const student_t_distribution& lhs,
const student_t_distribution& rhs );
```
_(since C++11) (until C++20)_

## Parameters
- `lhs, rhs`: distribution objects to compare

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3519 | C++11 | the form of equality operators were unspecified(could be hidden friends or free function templates) | specified to be hidden friends |
