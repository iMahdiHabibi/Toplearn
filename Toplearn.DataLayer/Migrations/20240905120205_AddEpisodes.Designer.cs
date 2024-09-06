﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Toplearn.DataLayer.Context;

#nullable disable

namespace Toplearn.DataLayer.Migrations
{
    [DbContext(typeof(TopLearnContext))]
    [Migration("20240905120205_AddEpisodes")]
    partial class AddEpisodes
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Course.Category", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CategoryId"));

                    b.Property<string>("CategoryName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<int?>("ParentCategoryId")
                        .HasColumnType("int");

                    b.HasKey("CategoryId");

                    b.HasIndex("ParentCategoryId");

                    b.ToTable("Categories");

                    b.HasData(
                        new
                        {
                            CategoryId = 1,
                            CategoryName = "برنامه نویسی سایت",
                            IsActive = true
                        },
                        new
                        {
                            CategoryId = 2,
                            CategoryName = "برنامه نویسی موبایل ",
                            IsActive = true
                        },
                        new
                        {
                            CategoryId = 3,
                            CategoryName = "طراحی سایت",
                            IsActive = true
                        },
                        new
                        {
                            CategoryId = 4,
                            CategoryName = "بانک اطلاعاتی",
                            IsActive = true
                        });
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Course.Course", b =>
                {
                    b.Property<int>("CourseId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CourseId"));

                    b.Property<int>("CategoryId")
                        .HasColumnType("int");

                    b.Property<string>("CourseDetail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CourseImagePath")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("CourseLevel")
                        .HasMaxLength(20)
                        .HasColumnType("int");

                    b.Property<string>("CourseName")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<int>("CoursePrice")
                        .HasColumnType("int");

                    b.Property<int>("CourseStatus")
                        .HasMaxLength(20)
                        .HasColumnType("int");

                    b.Property<DateTime>("CreateTime")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("LastUpdateTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Tags")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TeacherId")
                        .HasColumnType("int");

                    b.HasKey("CourseId");

                    b.HasIndex("CategoryId");

                    b.HasIndex("TeacherId");

                    b.ToTable("Courses");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Course.CourseEpisode", b =>
                {
                    b.Property<int>("EpisodeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("EpisodeId"));

                    b.Property<int>("CourseId")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreateDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("EpisodeFileUrl")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EpisodeTitle")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("EpisodeVideoTime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("EpisodeId");

                    b.HasIndex("CourseId");

                    b.ToTable("CourseEpisode");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Permission.Permission", b =>
                {
                    b.Property<int>("PermissionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PermissionId"));

                    b.Property<int?>("ParentId")
                        .HasColumnType("int");

                    b.Property<string>("PermissionDetail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PermissionPersianDetail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PermissionUrl")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("PermissionId");

                    b.HasIndex("ParentId");

                    b.ToTable("Permissions");

                    b.HasData(
                        new
                        {
                            PermissionId = 1,
                            PermissionDetail = "Admin_Roles",
                            PermissionPersianDetail = "مقام ها",
                            PermissionUrl = "POST"
                        },
                        new
                        {
                            PermissionId = 30,
                            ParentId = 1,
                            PermissionDetail = "Admin_Roles_Index",
                            PermissionPersianDetail = "نمایش مقام ها",
                            PermissionUrl = "/Admin/Roles"
                        },
                        new
                        {
                            PermissionId = 31,
                            ParentId = 1,
                            PermissionDetail = "Admin_Roles_UpdateUserRole",
                            PermissionPersianDetail = "بروز رسانی مقام های کاربران",
                            PermissionUrl = "POST"
                        },
                        new
                        {
                            PermissionId = 32,
                            ParentId = 1,
                            PermissionDetail = "Admin_Roles_AddRole",
                            PermissionPersianDetail = "اضافه کردن مقام جدید ",
                            PermissionUrl = "POST"
                        },
                        new
                        {
                            PermissionId = 33,
                            ParentId = 1,
                            PermissionDetail = "Admin_Roles_ChangeRoleStatus",
                            PermissionPersianDetail = "تغییر وضعیت مقام ",
                            PermissionUrl = "/Admin/RoleManager/ChangeRoleStatus"
                        },
                        new
                        {
                            PermissionId = 34,
                            ParentId = 1,
                            PermissionDetail = "Admin_Roles_EditRole",
                            PermissionPersianDetail = "تغییر در اطلاعات مقام ها",
                            PermissionUrl = "POST"
                        },
                        new
                        {
                            PermissionId = 35,
                            PermissionDetail = "ChangeIvg",
                            PermissionPersianDetail = "تغییر کد احراز هویت ",
                            PermissionUrl = "/Admin/ChangeIvg"
                        },
                        new
                        {
                            PermissionId = 2,
                            PermissionDetail = "Admin_Home",
                            PermissionPersianDetail = "ادمین",
                            PermissionUrl = "/Admin"
                        },
                        new
                        {
                            PermissionId = 36,
                            ParentId = 2,
                            PermissionDetail = "Admin_Home_Index",
                            PermissionPersianDetail = "داشبورد ادمین",
                            PermissionUrl = "/Admin"
                        },
                        new
                        {
                            PermissionId = 3,
                            PermissionDetail = "Admin_User",
                            PermissionPersianDetail = "امور مربوط به کاربران",
                            PermissionUrl = "/Admin/UserManager"
                        },
                        new
                        {
                            PermissionId = 38,
                            ParentId = 3,
                            PermissionDetail = "Admin_User_Index",
                            PermissionPersianDetail = "نمایش کاربران سایت",
                            PermissionUrl = "/Admin/UserManager/"
                        },
                        new
                        {
                            PermissionId = 39,
                            ParentId = 3,
                            PermissionDetail = "Admin_UserManager_ActiveAccount",
                            PermissionPersianDetail = "ارسال کد فعال سازی کاربر",
                            PermissionUrl = "POST"
                        },
                        new
                        {
                            PermissionId = 40,
                            ParentId = 3,
                            PermissionDetail = "Admin_UserManager_RemoveUserImage",
                            PermissionPersianDetail = "حذف آواتار شخصی کاربر",
                            PermissionUrl = "POST"
                        },
                        new
                        {
                            PermissionId = 41,
                            ParentId = 3,
                            PermissionDetail = "Admin_UserManager_UserForShow",
                            PermissionPersianDetail = "دیدن اطلاعات کاربر",
                            PermissionUrl = "POST"
                        },
                        new
                        {
                            PermissionId = 42,
                            ParentId = 3,
                            PermissionDetail = "Admin_UserManager_IncreaseTheWallet",
                            PermissionPersianDetail = "افزایش کیف پول کاربر",
                            PermissionUrl = "POST"
                        },
                        new
                        {
                            PermissionId = 4,
                            PermissionDetail = "Teacher",
                            PermissionPersianDetail = "پنل استاد",
                            PermissionUrl = "POST"
                        },
                        new
                        {
                            PermissionId = 43,
                            ParentId = 4,
                            PermissionDetail = "Teacher_Index",
                            PermissionPersianDetail = "داشبورد پنل استاد",
                            PermissionUrl = "/Teacher/Index"
                        },
                        new
                        {
                            PermissionId = 44,
                            ParentId = 4,
                            PermissionDetail = "Teacher_AddCourse",
                            PermissionPersianDetail = "اضافه کردن دوره ی جدید",
                            PermissionUrl = "/Teacher/AddCourse"
                        });
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Permission.RolesPermissions", b =>
                {
                    b.Property<int>("RolesPermissionsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RolesPermissionsId"));

                    b.Property<int>("PermissionId")
                        .HasColumnType("int");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.HasKey("RolesPermissionsId");

                    b.HasIndex("PermissionId");

                    b.HasIndex("RoleId");

                    b.ToTable("RolesPermissions");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Setting.AppSetting", b =>
                {
                    b.Property<string>("Key")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Key");

                    b.ToTable("AppSettings");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.User.Role", b =>
                {
                    b.Property<int>("RoleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RoleId"));

                    b.Property<bool>("IsActived")
                        .HasColumnType("bit");

                    b.Property<string>("RoleDetail")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.HasKey("RoleId");

                    b.ToTable("Roles");

                    b.HasData(
                        new
                        {
                            RoleId = 1,
                            IsActived = true,
                            RoleDetail = "کاربر سایت"
                        },
                        new
                        {
                            RoleId = 2,
                            IsActived = true,
                            RoleDetail = "ادمین"
                        },
                        new
                        {
                            RoleId = 3,
                            IsActived = true,
                            RoleDetail = "استاد"
                        },
                        new
                        {
                            RoleId = 4,
                            IsActived = true,
                            RoleDetail = "صاحب سایت"
                        });
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.User.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"));

                    b.Property<string>("ActiveCode")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("DateTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasMaxLength(60)
                        .HasColumnType("nvarchar(60)");

                    b.Property<string>("ImageUrl")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("UserDescription")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("WalletBalance")
                        .HasColumnType("int");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.User.User_Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.HasIndex("UserId");

                    b.ToTable("UserRoles");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Wallet.Wallet", b =>
                {
                    b.Property<int>("WalletId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("WalletId"));

                    b.Property<int>("Amount")
                        .HasColumnType("int");

                    b.Property<int>("Authority")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreateDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.Property<bool>("IsPay")
                        .HasColumnType("bit");

                    b.Property<int>("RefId")
                        .HasColumnType("int");

                    b.Property<int>("TypeId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("WalletId");

                    b.HasIndex("TypeId");

                    b.HasIndex("UserId");

                    b.ToTable("Wallets");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Wallet.WalletType", b =>
                {
                    b.Property<int>("TypeId")
                        .HasColumnType("int");

                    b.Property<string>("TypeTitle")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.HasKey("TypeId");

                    b.ToTable("WalletTypes");

                    b.HasData(
                        new
                        {
                            TypeId = 1,
                            TypeTitle = "برداشت"
                        },
                        new
                        {
                            TypeId = 2,
                            TypeTitle = "واریز"
                        },
                        new
                        {
                            TypeId = 3,
                            TypeTitle = "خرید مستقیم دوره"
                        });
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Course.Category", b =>
                {
                    b.HasOne("Toplearn.DataLayer.Entities.Course.Category", null)
                        .WithMany("ChildCategories")
                        .HasForeignKey("ParentCategoryId");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Course.Course", b =>
                {
                    b.HasOne("Toplearn.DataLayer.Entities.Course.Category", "Category")
                        .WithMany("Courses")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Toplearn.DataLayer.Entities.User.User", "Teacher")
                        .WithMany("Courses")
                        .HasForeignKey("TeacherId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Course.CourseEpisode", b =>
                {
                    b.HasOne("Toplearn.DataLayer.Entities.Course.Course", "Course")
                        .WithMany("Episodes")
                        .HasForeignKey("CourseId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Course");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Permission.Permission", b =>
                {
                    b.HasOne("Toplearn.DataLayer.Entities.Permission.Permission", null)
                        .WithMany("ParentPermission")
                        .HasForeignKey("ParentId");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Permission.RolesPermissions", b =>
                {
                    b.HasOne("Toplearn.DataLayer.Entities.Permission.Permission", "Permission")
                        .WithMany("RolesPermissionsList")
                        .HasForeignKey("PermissionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Toplearn.DataLayer.Entities.User.Role", "Role")
                        .WithMany("RolesPermissionsList")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Permission");

                    b.Navigation("Role");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.User.User_Role", b =>
                {
                    b.HasOne("Toplearn.DataLayer.Entities.User.Role", "Role")
                        .WithMany("UserRoles")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Toplearn.DataLayer.Entities.User.User", "User")
                        .WithMany("UserRoles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Role");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Wallet.Wallet", b =>
                {
                    b.HasOne("Toplearn.DataLayer.Entities.Wallet.WalletType", "WalletType")
                        .WithMany("Wallets")
                        .HasForeignKey("TypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Toplearn.DataLayer.Entities.User.User", "User")
                        .WithMany("Wallets")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");

                    b.Navigation("WalletType");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Course.Category", b =>
                {
                    b.Navigation("ChildCategories");

                    b.Navigation("Courses");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Course.Course", b =>
                {
                    b.Navigation("Episodes");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Permission.Permission", b =>
                {
                    b.Navigation("ParentPermission");

                    b.Navigation("RolesPermissionsList");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.User.Role", b =>
                {
                    b.Navigation("RolesPermissionsList");

                    b.Navigation("UserRoles");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.User.User", b =>
                {
                    b.Navigation("Courses");

                    b.Navigation("UserRoles");

                    b.Navigation("Wallets");
                });

            modelBuilder.Entity("Toplearn.DataLayer.Entities.Wallet.WalletType", b =>
                {
                    b.Navigation("Wallets");
                });
#pragma warning restore 612, 618
        }
    }
}
