---
title: "operator==,!=,<,<=,>,>=(std::experimental::filesystem::path)"
source_path: "cpp/experimental/fs/path/operator_cmp"
category: "experimental"
---

Compares two paths lexicographically.

## Declarations
```cpp
bool operator==( const path& lhs, const path& rhs );
```
_(filesystem TS)_

```cpp
bool operator!=( const path& lhs, const path& rhs );
```
_(filesystem TS)_

```cpp
bool operator<( const path& lhs, const path& rhs );
```
_(filesystem TS)_

```cpp
bool operator<=( const path& lhs, const path& rhs );
```
_(filesystem TS)_

```cpp
bool operator>( const path& lhs, const path& rhs );
```
_(filesystem TS)_

```cpp
bool operator>=( const path& lhs, const path& rhs );
```
_(filesystem TS)_

## Parameters
- `lhs, rhs`: the paths to compare

## Return value
true if the corresponding comparison yields, false otherwise.

## Notes
Path equality and equivalence have different semantics.

In the case of equality, as determined by operator==, only lexical representations are compared. Therefore, path("a") == path("b") is never true.

In the case of equivalence, as determined by [equivalent()](/cpp/experimental/fs/equivalent/), it is checked whether two paths resolve to the same file system object. Thus equivalent("a", "b") will return true if the paths resolve to the same file.

## See also
- [compare](/cpp/experimental/fs/path/compare/)
