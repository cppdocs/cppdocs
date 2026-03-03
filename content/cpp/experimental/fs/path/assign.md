---
title: "std::experimental::filesystem::path::assign"
source_path: "cpp/experimental/fs/path/assign"
category: "experimental"
---

Assigns the contents to the path object.

## Declarations
```cpp
template< class Source >
path& assign( const Source& source );
```
_(filesystem TS)_

```cpp
template< class InputIt >
path& assign( InputIt first, InputIt last );
```
_(filesystem TS)_

## Parameters
- `source`: a range to assign
- `first, last`: a range to assign

## Return value
*this

## See also
- [operator=](/cpp/experimental/fs/path/operator/)
