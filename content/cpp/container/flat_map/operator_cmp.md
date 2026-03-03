---
title: "operator==,<=>(std::flat_map)"
source_path: "cpp/container/flat_map/operator_cmp"
category: "container"
since: "C++23"
---

[1 Parameters](#Parameters)

## Declarations
```cpp
friend bool operator==( const std::flat_map& lhs,
const std::flat_map& rhs );
```
_(since C++23)_

```cpp
friend synth-three-way-result<value_type>
operator<=>( const std::flat_map& lhs,
const std::flat_map& rhs );
```
_(since C++23)_

## Parameters
- `lhs, rhs`: container adaptors whose contents to compare This section is incompleteReason: Add named requirements to "flat" container inner types

## Example
This section is incompleteReason: no example
