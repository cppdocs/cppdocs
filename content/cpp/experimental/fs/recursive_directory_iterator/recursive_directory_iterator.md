---
title: "std::experimental::filesystem::recursive_directory_iterator::recursive_directory_iterator"
source_path: "cpp/experimental/fs/recursive_directory_iterator/recursive_directory_iterator"
category: "experimental"
---

Constructs new recursive directory iterator.

## Declarations
```cpp
recursive_directory_iterator();
```
_(filesystem TS)_

```cpp
recursive_directory_iterator( const recursive_directory_iterator& ) = default;
```
_(filesystem TS)_

```cpp
recursive_directory_iterator( recursive_directory_iterator&& ) = default;
```
_(filesystem TS)_

```cpp
explicit recursive_directory_iterator( const path& p,
directory_options options = directory_options::none );
```
_(filesystem TS)_

```cpp
recursive_directory_iterator( const path& p,
directory_options options, error_code& ec );
```
_(filesystem TS)_

```cpp
recursive_directory_iterator( const path& p, error_code& ec );
```
_(filesystem TS)_

## Notes
Recursive directory iterators do not follow directory symlinks by default. To enable this behavior, specify directory_options::follow_directory_symlink among the options option set.
