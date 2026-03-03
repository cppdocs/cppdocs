---
title: "std::move_iterator<Iter>::operator="
source_path: "cpp/iterator/move_iterator/operator"
category: "iterator"
---

Assigns other.[current](/cpp/iterator/move_iterator/#current) to [current](/cpp/iterator/move_iterator/#current) ﻿.

## Declarations
```cpp
template< class U >
move_iterator& operator=( const move_iterator<U>& other );
```
_(constexpr since C++17)_

## Parameters
- `other`: iterator adaptor to assign

## Return value
*this

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3435 | C++20 | the converting assignment operator was not constrained | constrained |

## See also
- [(constructor)](/cpp/iterator/move_iterator/move_iterator/)
