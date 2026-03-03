---
title: "std::experimental::filesystem::directory_iterator::directory_iterator"
source_path: "cpp/experimental/fs/directory_iterator/directory_iterator"
category: "experimental"
---

Constructs a new directory iterator.

## Declarations
```cpp
directory_iterator();
```
_(filesystem TS)_

```cpp
explicit directory_iterator( const path& p );
```
_(filesystem TS)_

```cpp
directory_iterator( const path& p, error_code& ec );
```
_(filesystem TS)_

```cpp
directory_iterator( const directory_iterator& ) = default;
```
_(filesystem TS)_

```cpp
directory_iterator( directory_iterator&& ) = default;
```
_(filesystem TS)_

## Notes
To iterate over the current directory, construct the iterator as directory_iterator(".") instead of directory_iterator("").
