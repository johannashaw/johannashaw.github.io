<?php



// process get request
if (isset($_GET['action']))
{
  $action = strip_tags(trim($_GET['action']));

  // to build out the projects page
  if ($action == 'projects')
  {
    //
    SendProjInfo();
  }
  else
  {
    echo json_encode("nope! v1");
  }
}
else
{
  echo json_encode("nope! v2");
}


// Echos out the information for the projects that have been completed
function SendProjInfo()
{
  //
  $projects = array();

  $projects['img_link'] = 1;
  $projects['repo_link'] = 2;
  $projects['title'] = 3;
  $projects['function'] = 4;
  $projects['type'] = 5;
  $projects['languages'] = 6;



  echo json_encode($projects);
}