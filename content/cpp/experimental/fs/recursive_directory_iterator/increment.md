---
title: "std::experimental::filesystem::recursive_directory_iterator::operator++, increment"
source_path: "cpp/experimental/fs/recursive_directory_iterator/increment"
category: "experimental"
---

Advances the iterator to the next entry.

## Declarations
```cpp
recursive_directory_iterator& operator++();
```
_(filesystem TS)_

```cpp
recursive_directory_iterator& increment( error_code& ec );
```
_(filesystem TS)_

## Parameters
- `ec`: error code to store the error status to

## Return value
*this
