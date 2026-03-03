---
title: "std::filesystem::recursive_directory_iterator::recursive_directory_iterator"
source_path: "cpp/filesystem/recursive_directory_iterator/recursive_directory_iterator"
category: "filesystem"
since: "C++17"
---

Constructs new recursive directory iterator.

## Declarations
```cpp
recursive_directory_iterator() noexcept;
```
_(since C++17)_

```cpp
recursive_directory_iterator( const recursive_directory_iterator& other );
```
_(since C++17)_

```cpp
recursive_directory_iterator( recursive_directory_iterator&& other ) noexcept;
```
_(since C++17)_

```cpp
explicit recursive_directory_iterator( const std::filesystem::path& p );
```
_(since C++17)_

```cpp
recursive_directory_iterator(
const std::filesystem::path& p,
std::filesystem::directory_options options );
```
_(since C++17)_

```cpp
recursive_directory_iterator(
const std::filesystem::path& p,
std::filesystem::directory_options options,
std::error_code& ec );
```
_(since C++17)_

```cpp
recursive_directory_iterator( const std::filesystem::path& p, std::error_code& ec );
```
_(since C++17)_

## Parameters
- `p`: path to the filesystem object to which the directory iterator will refer
- `ec`: out-parameter for error reporting in the non-throwing overloads
- `options`: the set of BitmaskType options that control the behavior of the directory iterator
- `other`: another directory iterator to use as source to initialize the directory iterator with

## Notes
Recursive directory iterators do not follow directory symlinks by default. To enable this behavior, specify [directory_options::follow_directory_symlink](/cpp/filesystem/directory_options/) among the options option set.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3013 | C++17 | error_code overload marked noexcept but can allocate memory | noexcept removed |
