---
title: "std::locale::operator="
source_path: "cpp/locale/locale/operator"
category: "locale"
since: "C++11"
---

Creates a copy of other, replacing the contents of *this. The reference counts of all facets held by other are incremented. The reference counts of all facets previously held by *this are decremented, and those facets whose reference count becomes zero are deleted.

## Declarations
```cpp
const locale& operator=( const locale& other ) throw();
```
_(until C++11)_

```cpp
const locale& operator=( const locale& other ) noexcept;
```
_(since C++11)_

## Return value
Returns *this, which is now a copy of other.

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/locale/locale/locale/)
